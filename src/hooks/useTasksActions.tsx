import { useContext } from "react";
import { ErrorsContext } from "../Contexts/ErrorsContext";
import { TasksContext } from "../Contexts/TasksContext";
import { useAuth } from "./useAuth";
import api from "../api/api";
import { TaskListProps } from "../types/types";
import { useTaskStorage } from "./useTaskStorage";
import { useModalActions } from "./useModalActions";
import { FilterContext } from "../Contexts/FilterContext";

export function useTasksActions() {

    const error = useContext(ErrorsContext);
    const tasks = useContext(TasksContext);
    const task = useContext(TasksContext);
    const filter = useContext(FilterContext);
    const { handleGetToken } = useAuth();
    const { handleInsertTask } = useTaskStorage();
    const { handleCloseModal } = useModalActions();

    async function handleAddTask() {
        if (!tasks.title || !tasks.description) {
            error.setShowError(true);
            error.setErrorMensage("Prencha todos os campos");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return;
        }

        const newTask = {
            title: tasks.title,
            description: tasks.description
        }

        const token = handleGetToken();

        try {
            const response = await api.post("/api/ToDo", newTask, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const newTaskInfo: TaskListProps = response.data;

            const newList = [...tasks.tasksList, newTaskInfo]

            tasks.setTasksList(newList);

            handleInsertTask(newList);

            tasks.setTitle("");

            tasks.setDescription("");

            handleCloseModal();
        } catch (erro) {
            error.setShowError(true);
            error.setErrorMensage("Erro ao adicionar tarefa");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);
        }
    }

    async function handleGetTasksUser() {
        try {

            const token = handleGetToken();

            const response = await api.get("/api/ToDo", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            tasks.setTasksList(response.data);

        } catch (erro) {
            alert("Erro ao buscar as taefas no servidor")
        }
    }

    async function handleDeleteTask(id: number) {
        try {
            const token = handleGetToken();

            await api.delete(`/api/ToDo/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const filteredList = tasks.tasksList.filter((task) => task.id !== id);

            tasks.setTasksList(filteredList);

            handleInsertTask(filteredList);

        } catch (error) {
            alert("Erro ao excluir tarefa")
        }
    }

    async function handleMarkAsDone(id: number) {

        try {
            const token = handleGetToken();

            await api.get(`/api/ToDo/MarkAsDone/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const response = await api.get("/api/ToDo", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            tasks.setTasksList(response.data);

            return 1;
        } catch (error) {
            alert("Não foi possível marcar como concluida")
        }
    }

    function handleFilterTasks() {
        const allTaskts = task.tasksList;
        let filteredTasks = task.filteredTaskList!;


        if (filter.pending && !filter.done) {
            filteredTasks = allTaskts.filter((task) => task.status === 0);

            task.setFilteredTaskList!(filteredTasks);
        } else if (!filter.pending && filter.done) {
            filteredTasks = allTaskts.filter((task) => task.status === 1);

            task.setFilteredTaskList!(filteredTasks);
        } else {
            task.setFilteredTaskList!([]);
        }
    }

    async function clearTasksVisitor() {
        const allTasks = tasks.tasksList;
    
        for(const task of allTasks){
            await handleDeleteTask(task.id);
        }

        await handleGetTasksUser();
    }

    return {
        handleAddTask,
        handleGetTasksUser,
        handleDeleteTask,
        handleMarkAsDone,
        handleFilterTasks,
        clearTasksVisitor
    }
}
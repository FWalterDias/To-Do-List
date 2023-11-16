import { useContext } from "react";
import { ErrorsContext } from "../contexts/ErrorsContext";
import { TasksContext } from "../contexts/TasksContext";
import { useAuth } from "./useAuth";
import api from "../api/api";
import { TaskListProps } from "../types/types";
import { useTaskStorage } from "./useTaskStorage";
import { useModalActions } from "./useModalActions";

export function useTasksActions(){

    const error = useContext(ErrorsContext);
    const tasks = useContext(TasksContext);
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

            tasks.setTasksList(response.data)

        } catch (erro) {
            console.log(erro);
        }
    }

    return{
        handleAddTask,
        handleGetTasksUser
    }
}
import { TaskListProps } from "../Contexts/TasksContext";

export function useTaskStorage() {

    function handleInsertTask(tasks: TaskListProps[]) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function handleGetTasks(): TaskListProps[] {
        const allTasksSaved =  
        localStorage.getItem("tasks") ? 
        JSON.parse(localStorage.getItem("tasks")!) :
        [];

        return allTasksSaved;
    }

    function hanldeClearTaks(){
        localStorage.removeItem("tasks");
    }

    return {
        handleInsertTask,
        handleGetTasks,
        hanldeClearTaks
    }
}
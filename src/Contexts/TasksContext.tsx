import { createContext, useState } from "react";
import { TaskListProps, TasksProps, TasksProviderProps } from "../types/types";

export const TasksContext = createContext<TasksProps>({
    id: 0,
    setId: () => { },
    title: "",
    setTitle: () => { },
    description: "",
    setDescription: () => { },
    date: "",
    setDate: () => { },
    status: 0,
    setStatus: () => { },
    guidIdUser: "",
    setGuidIdUser: () => { },
    tasksList: [], 
    setTasksList: () => { },
    filteredTaskList: [],
    setFilteredTaskList: () => { }
});

export function TasksProvider({ children }: TasksProviderProps) {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [status, setStatus] = useState<number>(0);
    const [guidIdUser, setGuidIdUser] = useState<string>("");
    const [tasksList, setTasksList] = useState<TaskListProps[]>([]);
    const [filteredTaskList, setFilteredTaskList] = useState<TaskListProps[]>([]);

    const tasksContextValue: TasksProps = {
        id,
        setId,
        title,
        setTitle,
        description,
        setDescription,
        date,
        setDate,
        status,
        setStatus,
        guidIdUser,
        setGuidIdUser,
        tasksList,
        setTasksList,
        filteredTaskList,
        setFilteredTaskList
    };

    return (
        <TasksContext.Provider value={tasksContextValue}>
            {children}
        </TasksContext.Provider>
    )
}
import { createContext, ReactNode, useState } from "react";

export type TasksProps = {
    id: number,
    setId: (value: number) => void,
    title: string,
    setTitle: (value: string) => void,
    description: string,
    setDescription: (value: string) => void,
    date: string,
    setDate: (value: string) => void,
    status: number,
    setStatus: (value: number) => void,
    guidIdUser: string
    setGuidIdUser: (value: string) => void
    tasksList: TaskListProps[],
    setTasksList: (value: TaskListProps[]) => void
    filteredTaskList?: TaskListProps[],
    setFilteredTaskList?: (value: TaskListProps[]) => void
}

export type TaskListProps = {
    id: number,
    title: string,
    description: string,
    date: string,
    status: number,
    guidIdUser: string,
    filteredTaskList?: TaskListProps[],
    setFilteredTaskList?: (value: TaskListProps[]) => void
}

type TasksProviderProps = {
    children: ReactNode
}

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
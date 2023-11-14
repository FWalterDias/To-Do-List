import { createContext, ReactNode, useState } from "react";

type TasksProps = {
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
    guidUser: string
    setGuidUser: (value: string) => void
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
    guidUser: "",
    setGuidUser: () => { }
});

export function TasksProvider({ children }: TasksProviderProps) {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [status, setStatus] = useState<number>(0);
    const [guidUser, setGuidUser] = useState<string>("");

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
        guidUser,
        setGuidUser
    };

    return (
        <TasksContext.Provider value={tasksContextValue}>
            {children}
        </TasksContext.Provider>
    )
}
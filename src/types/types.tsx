import { ReactNode } from "react";

export type UserProps = {
    user: string;
    setUser: (value: string) => void;
    userName: string;
    setUserName: (value: string) => void;
    password: string;
    setPassWord: (value: string) => void;
    confirmPassword: string,
    setConfirmPassWord: (value: string) => void;
};

export type ButtonProps = {
    type: "signin" | "signup" | "task",
    text: string,
    btnWidth: "biggest" | "small"
    action?: "signin" | "signup" | "addTask" | "openModal" | "closeModal",
}

export type CardProps = {
    id: number
    title: string,
    description: string,
    date: string,
    status: number
}

export type ErrorComponentProps = {
    text: string
}

export type FilterButotonProps = {
    filterOpen: boolean,
    setFilterOpen: (value: boolean) => void
}

export type ErrorProviderProps = {
    children: ReactNode
}

export type ErrorProps = {
    showError: boolean,
    setShowError: (value: boolean) => void,
    errorMensage: string,
    setErrorMensage: (value: string) => void
}

export type FilterProviderProps = {
    children: ReactNode
}

export type FilterProps = {
    done: boolean,
    setDone: (value: boolean) => void,
    pending: boolean,
    setPending: (value: boolean) => void
}

export type ModalProviderProps = {
    children: ReactNode
}

export type ModalProps = {
    isOpen: boolean,
    setModal: (value: boolean) => void,
}

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

export type TasksProviderProps = {
    children: ReactNode
}

export type UserProviderProps = {
    children: ReactNode
}
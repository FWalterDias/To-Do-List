import { createContext, ReactNode, useState } from "react";
import { UserProps } from "../types/userProps";

type UserProviderProps = {
    children: ReactNode
}

export const UserContext = createContext<UserProps | null>(null);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [password, setPassWord] = useState<string>("");

    const userContextValue: UserProps = {
        user,
        setUser,
        userName,
        setUserName,
        password,
        setPassWord,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
}
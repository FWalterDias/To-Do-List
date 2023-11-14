import { createContext, useState } from "react";
import { UserProps, UserProviderProps } from "../types/types";

export const UserContext = createContext<UserProps>({
    user: "",
    setUser: () => {},
    userName: "",
    setUserName: () => {},
    password: "",
    setPassWord: () => {},
    confirmPassword: "",
    setConfirmPassWord: () => {}
});

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [password, setPassWord] = useState<string>("");
    const [confirmPassword, setConfirmPassWord] = useState<string>("");
    
    const userContextValue: UserProps = {
        user,
        setUser,
        userName,
        setUserName,
        password,
        setPassWord,
        confirmPassword,
        setConfirmPassWord
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
}
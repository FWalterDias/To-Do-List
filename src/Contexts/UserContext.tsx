import { createContext, useState } from "react";
import { UserProps, UserProviderProps, VisitorProps } from "../types/types";

export const UserContext = createContext<UserProps>({
    user: "",
    setUser: () => {},
    userName: "",
    setUserName: () => {},
    password: "",
    setPassWord: () => {},
    confirmPassword: "",
    setConfirmPassWord: () => {},
    visitor: {
        userName: "",
        password: ""
    },
    setVisitor: () => { },
});

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [password, setPassWord] = useState<string>("");
    const [confirmPassword, setConfirmPassWord] = useState<string>("");
    const [visitor, setVisitor] = useState<VisitorProps>({
        userName: "visitante",
        password: "@Visitante123"
    });
    
    const userContextValue: UserProps = {
        user,
        setUser,
        userName,
        setUserName,
        password,
        setPassWord,
        confirmPassword,
        setConfirmPassWord,
        visitor,
        setVisitor
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
}
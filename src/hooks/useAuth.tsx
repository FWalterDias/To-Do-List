import { useNavigate } from "react-router-dom";

export function useAuth() {

    const navigate = useNavigate();

    function handleAddToken(token: string): void {
        localStorage.setItem("token", token);
    }

    function handleGetToken(): string | null {
        return localStorage.getItem("token");
    }

    function handleClearToken(): void {
        localStorage.removeItem("token");
    }
    
    function handleAddUserName(userName: string): void {
        localStorage.setItem("userName", userName);
    }

    function handleGetUserName(): string | null {
        return localStorage.getItem("userName");
    }

    function handleClearUserName(): void {
        localStorage.removeItem("userName");
    }

    function handleVerifyToken(){
        const hasToken = handleGetToken();

        if (hasToken) {
            navigate("/home");
        }
    }
    
    return{
        handleAddToken,
        handleClearToken,
        handleGetToken,
        handleAddUserName,
        handleGetUserName,
        handleClearUserName,
        handleVerifyToken
    }
}
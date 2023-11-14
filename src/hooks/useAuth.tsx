export function useAuth() {

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
    
    return{
        handleAddToken,
        handleClearToken,
        handleGetToken,
        handleAddUserName,
        handleGetUserName,
        handleClearUserName
    }
}
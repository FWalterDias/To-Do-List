export function useAuth() {

    function handleAddToken(token: string): void {
        localStorage.setItem("token", token);
    }

    function handleClearToken(): void {
        localStorage.removeItem("token");
    }

    function handleGetToken(): string | null {
        return localStorage.getItem("token");
    }

    return{
        handleAddToken,
        handleClearToken,
        handleGetToken
    }
}
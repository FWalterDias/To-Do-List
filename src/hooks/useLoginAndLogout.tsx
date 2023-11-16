import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { ErrorsContext } from "../Contexts/ErrorsContext";
import { TasksContext } from "../Contexts/TasksContext";
import { UserContext } from "../Contexts/UserContext";
import { useAuth } from "./useAuth";


export function useLoginAndLogout() {

    const userValues = useContext(UserContext);
    const error = useContext(ErrorsContext);
    const tasks = useContext(TasksContext);

    const navigate = useNavigate();
    const { handleAddToken, handleGetToken, handleAddUserName, handleClearToken } = useAuth();

    async function handleSignIn() {
        if (!userValues.userName || !userValues.password) {
            error.setShowError(true);
            error.setErrorMensage("Preencha todos os campos");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return;
        }

        const user = {
            "username": userValues?.userName,
            "password": userValues?.password
        }

        try {
            const response = await api.post("/api/Auth", user);

            const { token } = response.data;

            handleAddToken(token);

            handleAddUserName(user.username);

            navigate("/home");
        } catch (erro) {
            error.setShowError(true);
            error.setErrorMensage("Usuario ou senha incorretos");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);
        }
    }

    async function handleSingUp() {
        if (!userValues.user || !userValues.userName ||
            !userValues.password || !userValues.confirmPassword) {
            error.setShowError(true);
            error.setErrorMensage("Preencha todos os campoos");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return;
        }

        const hasError = validatePassWord(userValues?.password, userValues?.confirmPassword);

        if (hasError) return;

        const user = {
            "username": userValues?.userName,
            "password": userValues?.password,
            "name": userValues?.user
        }

        try {
            const response = await api.post("/api/Auth/SignIn", user);

            const { token } = response.data;

            handleAddToken(token);
            handleAddUserName(user.username);

            navigate("/home");
        } catch (erro) {
            error.setShowError(true);
            error.setErrorMensage("Erro interno do servidor");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);
        }
    }

    async function handleLoginVisitor() {
        try {
            const user = {
                "username": userValues.visitor.userName,
                "password": userValues.visitor.password
            }

            const response = await api.post("/api/Auth", user);

            const { token } = response.data;

            handleAddToken(token);

            handleAddUserName(user.username);

            navigate("/home");
        } catch (error) {
            alert("Não foi possivel fazer o login")
        }
    }

    async function handleLogout() {
        if (!userValues.userName) {
            try {
                const token = handleGetToken();

                const allTasks = tasks.tasksList;

                for (const task of allTasks) {
                    await api.delete(`/api/ToDo/${task.id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }

        }
        handleClearToken();
        navigate("/");
    }

    function validatePassWord(password: string, confimPassword: string) {
        if (password.length < 6) {
            error.setShowError(true);
            error.setErrorMensage("A senha precisa ser maior que 6 caracteres");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return true;
        } else if (!/\W/.test(password)) {
            error.setShowError(true);
            error.setErrorMensage("A senha precisa conter ao menos um caractere especial");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return true;
        } else if (!/[A-Z]/.test(password)) {
            error.setShowError(true);
            error.setErrorMensage("A senha precisa conter ao menos uma letra Maiúsula");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return true;
        } else if (!/[a-z]/.test(password)) {
            error.setShowError(true);
            error.setErrorMensage("A senha precisa conter ao menos uma letra Minúscula");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return true;
        } else if (password !== confimPassword) {
            error.setShowError(true);
            error.setErrorMensage("As senhas não conferem");

            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return true;
        }
    }

    return {
        handleSignIn,
        handleSingUp,
        handleLogout,
        handleLoginVisitor
    }
}
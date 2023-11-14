import { UserContext } from "../../Contexts/UserContext";
import { ContainerButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import api from "../../api/api";
import { useAuth } from "../../hooks/useAuth";
import { ErrorsContext } from "../../Contexts/ErrorsContext";
import { ModalContext } from "../../Contexts/ModalContext";
import { TaskListProps, TasksContext } from "../../Contexts/TasksContext";

type ButtonProps = {
    type: "signin" | "signup" | "task",
    text: string,
    btnWidth: "biggest" | "small"
    action?: "signin" | "signup" | "addTask" | "openModal" | "closeModal",
}

export function Button({ type, text, btnWidth, action }: ButtonProps) {

    const userValues = useContext(UserContext);
    const error = useContext(ErrorsContext);
    const modal = useContext(ModalContext);
    const tasks = useContext(TasksContext);

    const navigate = useNavigate();
    const { handleAddToken, handleGetToken } = useAuth();

    function handleActions(e: React.FormEvent) {
        e.preventDefault();

        if (type === "signup") navigate("/signup");

        if (action === "signin") handleLogin();

        if (action === "signup") handleSingUp();

        if (action === "addTask") handleAddTask();

        if (action === "openModal") handleOpenModal();

        if (action === "closeModal") handleCloseModal();
    }

    async function handleLogin() {
        if (!userValues?.userName || !userValues?.password) {
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

            navigate("/home");
        } catch (error) {
            alert("Usuário ou senha incorreto");
        }
    }

    async function handleSingUp() {
        if (!userValues?.user || !userValues?.userName ||
            !userValues?.password || !userValues.confirmPassword) {
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

            navigate("/home");
        } catch (error) {
            alert("Erro ao cadastrar usuario");
        }

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

    function handleOpenModal() {
        modal.setModal(true);
    }

    function handleCloseModal() {
        modal.setModal(false);
    }

    async function handleAddTask(){

        if(!tasks.title || !tasks.description){
            error.setShowError(true);
            error.setErrorMensage("Prencha todos os campos");
            
            setTimeout(() => {
                error.setShowError(false);
            }, 2000);

            return;
        }

        const newTask = {
            title: tasks.title,
            description: tasks.description
        }

        const token = handleGetToken();

        try {
            const response = await api.post("/api/ToDo", newTask, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            const newTaskInfo: TaskListProps = response.data;

            tasks.setTasksList([...tasks.tasksList, newTaskInfo]);

            modal.setModal(false)
        } catch (error) {
            alert("Erro ao cadastrar tarefa")
        }
        
    }

    const buttonClasses = `${type} ${btnWidth}`

    return (
        <ContainerButton className={buttonClasses} onClick={handleActions}>
            {text}
        </ContainerButton>
    )
}
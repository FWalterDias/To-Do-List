import { UserContext } from "../../Contexts/UserContext";
import { ContainerButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import api from "../../api/api";
import { useAuth } from "../../hooks/useAuth";

type ButtonProps = {
    type: "signin" | "signup" | "task",
    text: string,
    btnWidth: "biggest" | "small"
    action?: "signin" | "signup",
    setShowError: (value: boolean) => void
}

export function Button({ type, text, btnWidth, action, setShowError }: ButtonProps) {

    const userValues = useContext(UserContext);
    const navigate = useNavigate();
    const { handleAddToken } = useAuth();

    function handleFormAction(e: React.FormEvent) {
        e.preventDefault();

        if (type === "signup") return navigate("/signup");

        if (action === "signin") return handleLogin();

        if (action === "signup") return handleSingUp();
    }
    
    async function handleLogin() {
        if (!userValues?.userName || !userValues?.password) {
            setShowError(true);

            setTimeout(() => {
                setShowError(false);
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
        console.log("clicou");
    }

    const buttonClasses = `${type} ${btnWidth}`

    return (
        <ContainerButton className={buttonClasses} onClick={handleFormAction}>
            {text}
        </ContainerButton>
    )
}
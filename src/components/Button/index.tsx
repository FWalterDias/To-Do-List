import { useNavigate } from "react-router-dom";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";
import { useModalActions } from "../../hooks/useModalActions";
import { useTasksActions } from "../../hooks/useTasksActions";
import { ButtonProps } from "../../types/types";
import { ContainerButton } from "./styles";


export function Button({ type, text, btnWidth, action }: ButtonProps) {

    const navigate = useNavigate();
    const { handleSignIn, handleSingUp } = useLoginAndLogout();
    const { handleOpenModal, handleCloseModal } = useModalActions();
    const { handleAddTask } = useTasksActions();

    async function handleActions(e: React.FormEvent) {
        e.preventDefault();

        if (type === "signup") navigate("/signup");

        if (action === "signin") await handleSignIn();

        if (action === "signup") await handleSingUp();

        if (action === "addTask") await handleAddTask();

        if (action === "openModal") handleOpenModal();

        if (action === "closeModal") handleCloseModal();
    }

    const buttonClasses = `${type} ${btnWidth}`

    return (
        <ContainerButton className={buttonClasses} onClick={handleActions}>
            {text}
        </ContainerButton>
    )
}
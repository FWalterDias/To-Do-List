import { ContainerButton } from "./styles";
import { useNavigate } from "react-router-dom"

type ButtonProps = {
    type: "signin" | "signup" | "task",
    text: string,
}

export function Button({ type, text }: ButtonProps) {

    const navigate = useNavigate();

    function handleNavigate() {
        if (type === "signup") navigate("/signup");
    }

    return (
        <ContainerButton className={type} onClick={handleNavigate}>
            {text}
        </ContainerButton>
    )
}
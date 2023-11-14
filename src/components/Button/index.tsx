import { ContainerButton } from "./styles";
import { useNavigate } from "react-router-dom"

type ButtonProps = {
    type: "signin" | "signup" | "task",
    text: string,
}

export function Button({ type, text }: ButtonProps) {

    const navigate = useNavigate();

    function handleNavigate() {
        if (type === "signup") return navigate("/signup");

        if(type === "signin") return navigate("/home");
    }

    return (
        <ContainerButton className={type} onClick={handleNavigate}>
            {text}
        </ContainerButton>
    )
}
import { ContainerButton } from "./styles";
import { useNavigate } from "react-router-dom"

type ButtonProps = {
    type: "signin" | "signup" | "task",
    text: string,
    btnWidth: "biggest" | "small"
}

export function Button({ type, text, btnWidth }: ButtonProps) {

    const navigate = useNavigate();

    function handleNavigate() {
        if (type === "signup") return navigate("/signup");

        if(type === "signin") return navigate("/home");
    }

    const buttonClasses = `${type} ${btnWidth}`

    return (
        <ContainerButton className={buttonClasses} onClick={handleNavigate}>
            {text}
        </ContainerButton>
    )
}
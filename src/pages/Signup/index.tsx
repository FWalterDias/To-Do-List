import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgSignUp from "../../assets/img-signup.png";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth.tsx";
import { ContainerSignUp } from "./styles.ts";

export function SingUp() {

    const { handleGetToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const hasToken = handleGetToken();

        if (hasToken) {
            navigate("/home");
        }
    });
    
    return (
        <ContainerSignUp>
            <Logo />
            <img src={imgSignUp} alt="img-sigin" className="img-signin" />

            <Form type="signup" />
        </ContainerSignUp>
    )
}
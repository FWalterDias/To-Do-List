import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgSignIn from "../../assets/img-signin.png";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth.tsx";
import { ContainerSigIn } from "./styles.ts";

export function SingIn() {

    const { handleGetToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const hasToken = handleGetToken();

        if (hasToken) {
            navigate("/home");
        }
    });

    return (
        <ContainerSigIn>
            <Logo />
            <img src={imgSignIn} alt="img-sigin" className="img-signin" />

            <Form type="signin" />
        </ContainerSigIn>
    )
}
import { useEffect } from "react";
import imgSignIn from "../../assets/img-signin.png";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import { ContainerSigIn } from "./styles";

export function SignIn() {
    const { handleVerifyToken } = useAuth();

    useEffect(() => {
        handleVerifyToken();
    }, []);

    return (
        <ContainerSigIn>
            <Logo />
            <img src={imgSignIn} alt="img-sigin" className="img-signin" />

            <Form type="signin" />
        </ContainerSigIn>
    );
}
import { useEffect } from "react";
import imgSignUp from "../../assets/img-signup.png";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import { ContainerSignUp } from "./styles";

export function SignUp() {
    const { handleVerifyToken } = useAuth();

    useEffect(() => {
        handleVerifyToken();
    }, []);

    return (
        <ContainerSignUp>
            <Logo />
            <img src={imgSignUp} alt="img-signup" className="img-signup" />

            <Form type="signup" />
        </ContainerSignUp>
    );
}
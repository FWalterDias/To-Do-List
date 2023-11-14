import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgSignUp from "../../assets/img-signup.png";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import { ContainerSignUp } from "./styles";

export function SignUp() {
    const { handleGetToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const hasToken = handleGetToken();

        if (hasToken) {
            navigate("/home");
        }
    }, [handleGetToken, navigate]);

    return (
        <ContainerSignUp>
            <Logo />
            <img src={imgSignUp} alt="img-signup" className="img-signup" />

            <Form type="signup" />
        </ContainerSignUp>
    );
}
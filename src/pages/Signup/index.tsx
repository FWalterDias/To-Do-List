import { Logo } from "../../components/Logo";
import imgSignUp from "../../assets/img-signup.png";
import { ContainerSignUp } from "./styles.ts";
import { Form } from "../../components/Form";

export function SingUp() {
    return (
        <ContainerSignUp>
            <Logo />
            <img src={imgSignUp} alt="img-sigin" className="img-signin" />

            <Form type="signup" />
        </ContainerSignUp>
    )
}
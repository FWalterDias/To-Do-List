import { Logo } from "../../components/Logo";
import imgSignIn from "../../assets/img-signin.png";
import { ContainerSigIn } from "./styles.ts";
import { Form } from "../../components/Form";

export function SingIn() {
    return (
        <ContainerSigIn>
            <Logo />
            <img src={imgSignIn} alt="img-sigin" className="img-signin" />

            <Form type="signin" />
        </ContainerSigIn>
    )
}
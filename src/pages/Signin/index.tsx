import { Logo } from "../../components/Logo";
import imgSignIn from "../../assets/img-signin.png";
import {ContainerSigIn} from "./styles";
import { FormSignIn } from "./FormSignIn";

export function Singin() {
    return (
        <ContainerSigIn>
            <Logo />
            <img src={imgSignIn} alt="img-sigin" className="img-signin" />

            <FormSignIn />
        </ContainerSigIn>
    )
}
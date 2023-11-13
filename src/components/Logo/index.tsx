import { ContainerLogo } from "./styles";
import logo from "../../assets/Logo.png";

export function Logo(){
    return(
        <ContainerLogo className="logo">
            <img src={logo} alt="" />
            <strong>To Do List</strong>
        </ContainerLogo>
    )
}
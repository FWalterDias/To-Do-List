import { ContainerLogo } from "./styles";
import logo from "../../assets/Logo.png";

export function Logo(){
    return(
        <ContainerLogo>
            <img src={logo} alt="" />
            <strong>To Do List</strong>
        </ContainerLogo>
    )
}
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { ContainerHeader, ContainerProfile } from "./styles";
import iconProfile from "../../assets/icone-User-Account.svg";
import iconLogout from "../../assets/icon-logout.svg";

type HeaderProps = {
    userName: string
}

export function Header({ userName }: HeaderProps) {
    return (
        <ContainerHeader>
            <Logo />

            <ContainerProfile>
                <img src={iconProfile} alt="icon-profile" />

                <strong>
                    {`Bem vindo(a), ${userName}`}
                </strong>

                <Link to="/">
                    <img src={iconLogout} alt="icon-logout" />
                </Link>
            </ContainerProfile>
        </ContainerHeader>
    );
}
import iconLogout from "../../assets/icon-logout.svg";
import iconProfile from "../../assets/icone-User-Account.svg";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import { useLoginAndLogout } from "../../hooks/useLoginAndLogout";
import { ContainerHeader, ContainerProfile } from "./styles";


export function Header() {

    const { handleGetUserName } = useAuth();
    const { handleLogout } = useLoginAndLogout();

    return (
        <ContainerHeader>
            <Logo />

            <ContainerProfile>
                <img src={iconProfile} alt="icon-profile" />

                <strong>
                    {`Bem vindo(a), ${handleGetUserName()}`}
                </strong>

                <button onClick={handleLogout}>
                    <img src={iconLogout} alt="icon-logout" />
                </button>
            </ContainerProfile>
        </ContainerHeader>
    );
}
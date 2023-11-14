import { useNavigate } from "react-router-dom";
import iconLogout from "../../assets/icon-logout.svg";
import iconProfile from "../../assets/icone-User-Account.svg";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import { ContainerHeader, ContainerProfile } from "./styles";


export function Header() {

    const { handleClearToken, handleGetUserName } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        handleClearToken();
        navigate("/");
    }

    const userName = handleGetUserName();

    return (
        <ContainerHeader>
            <Logo />

            <ContainerProfile>
                <img src={iconProfile} alt="icon-profile" />

                <strong>
                    {`Bem vindo(a), ${userName}`}
                </strong>

                <button onClick={handleLogout}>
                    <img src={iconLogout} alt="icon-logout" />
                </button>
            </ContainerProfile>
        </ContainerHeader>
    );
}
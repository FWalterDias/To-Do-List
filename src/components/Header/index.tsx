import { useNavigate } from "react-router-dom";
import iconLogout from "../../assets/icon-logout.svg";
import iconProfile from "../../assets/icone-User-Account.svg";
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/useAuth";
import { ContainerHeader, ContainerProfile } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TasksContext } from "../../contexts/TasksContext";
import api from "../../api/api";


export function Header() {

    const userValues = useContext(UserContext);
    const tasks = useContext(TasksContext);

    const { handleClearToken, handleGetUserName, handleGetToken } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        if (!userValues.userName) {
            try {
                const token = handleGetToken();

                const allTasks = tasks.tasksList;
                
                for(const task of allTasks){
                    await api.delete(`/api/ToDo/${task.id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                }  
            } catch (error) {
                console.log(error);
            }
            
        }
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
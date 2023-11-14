import { ContainerCard, CotainerCardActions, ContainerHeaderCard, ContainerFooterCard, ContainerCardStatus } from "./styles";
import iconEdit from "../../assets/icon-editar.svg";
import iconDelete from "../../assets/icon-lixo.svg";
import { useAuth } from "../../hooks/useAuth";
import api from "../../api/api";
import { useContext } from "react";
import { TasksContext } from "../../Contexts/TasksContext";
import { useTaskStorage } from "../../hooks/useTaskStorage";

type CardProps = {
    id: number
    title: string,
    description: string,
    date: string,
    status: number
}

export function Card({id, title, description, date, status}: CardProps) {

    const { handleGetToken } = useAuth();
    const { handleInsertTask } = useTaskStorage();
    const tasks = useContext(TasksContext);

    async function handleDeleteTask(){
        try {
            const token = handleGetToken();

            const response = await api.delete(`/api/ToDo/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const filteredList = tasks.tasksList.filter((task) => task.id !== id);

            tasks.setTasksList(filteredList);

            handleInsertTask(filteredList);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ContainerCard>

            <CotainerCardActions>
                <img src={iconEdit} alt="icon-Edit" />
                <img src={iconDelete} alt="icon-Delete" onClick={handleDeleteTask} />
            </CotainerCardActions>

            <ContainerHeaderCard>
                <h3>
                    {title}
                </h3>

                <p>
                    {description}
                </p>
            </ContainerHeaderCard>

            <ContainerFooterCard>
                <strong>
                    {date}
                </strong>

                <ContainerCardStatus>
                    <strong>
                        {status}
                    </strong>
                </ContainerCardStatus>
            </ContainerFooterCard>
        </ContainerCard>
    )
}
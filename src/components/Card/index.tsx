import { ContainerCard, CotainerCardActions, ContainerHeaderCard, ContainerFooterCard, ContainerCardStatus, ContainerCardDone } from "./styles";
import iconCheckBox from "../../assets/icon-checkbox.png";
import iconCheckBoxChecked from "../../assets/checkbox-checked.svg";
import iconDelete from "../../assets/icon-lixo.svg";
import { useAuth } from "../../hooks/useAuth";
import api from "../../api/api";
import { useContext, useState } from "react";
import { TasksContext } from "../../Contexts/TasksContext";
import { useTaskStorage } from "../../hooks/useTaskStorage";

type CardProps = {
    id: number
    title: string,
    description: string,
    date: string,
    status: number
}

export function Card({ id, title, description, date, status }: CardProps) {

    const { handleGetToken } = useAuth();
    const { handleInsertTask } = useTaskStorage();
    const tasks = useContext(TasksContext);
    const [done, setDone] = useState<number>(status);

    async function handleDeleteTask() {
        try {
            const token = handleGetToken();

            await api.delete(`/api/ToDo/${id}`, {
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

    async function handleMarkAsDone() {

        try {
            const token = handleGetToken();

            await api.get(`/api/ToDo/MarkAsDone/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const response = await api.get("/api/ToDo", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            tasks.setTasksList(response.data);

            setDone(1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ContainerCard className={done === 1 ? "done" : ""}>
            {
                done === 1 &&
                <ContainerCardDone />
            }

            <CotainerCardActions>
                <img src={done ? iconCheckBoxChecked : iconCheckBox} alt="icon-Checkbox" onClick={handleMarkAsDone} />
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
                    {`Criada em ${date.split("-").reverse().join("/")}`}
                </strong>

                <ContainerCardStatus className={done === 0 ? "pendente" : ""}>
                    <strong>
                        {status == 0 ? "Pendente" : "Concluída"}
                    </strong>
                </ContainerCardStatus>
            </ContainerFooterCard>
        </ContainerCard>
    )
}
import { useState } from "react";
import iconCheckBoxChecked from "../../assets/checkbox-checked.svg";
import iconCheckBox from "../../assets/icon-checkbox.png";
import iconDelete from "../../assets/icon-lixo.svg";
import { useTasksActions } from "../../hooks/useTasksActions";
import { CardProps } from "../../types/types";
import { ContainerCard, ContainerCardDone, ContainerCardStatus, ContainerFooterCard, ContainerHeaderCard, CotainerCardActions } from "./styles";



export function Card({ id, title, description, date, status }: CardProps) {

    const [done, setDone] = useState<number>(status);
    const { handleDeleteTask, handleMarkAsDone } = useTasksActions();

    async function markAsDone() {
        const taskDone = await handleMarkAsDone(id);

        return taskDone ? setDone(taskDone) : 0;
    }


    return (
        <ContainerCard className={done === 1 ? "done" : ""}>
            {
                done === 1 &&
                <ContainerCardDone />
            }

            <CotainerCardActions>
                <img src={done ? iconCheckBoxChecked : iconCheckBox} alt="icon-Checkbox" onClick={markAsDone} />
                <img src={iconDelete} alt="icon-Delete" onClick={async () => await handleDeleteTask(id)} />
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
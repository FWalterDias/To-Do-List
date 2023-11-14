import { ContainerCard, CotainerCardActions, ContainerHeaderCard, ContainerFooterCard, ContainerCardStatus } from "./styles";
import iconEdit from "../../assets/icon-editar.svg";
import iconDelete from "../../assets/icon-lixo.svg";

export function Card() {
    return (
        <ContainerCard>

            <CotainerCardActions>
                <img src={iconEdit} alt="icon-Edit" />
                <img src={iconDelete} alt="icon-Delete" />
            </CotainerCardActions>

            <ContainerHeaderCard>
                <h3>
                    Nome da tarefa
                </h3>

                <p>
                    Descrição da tarefadasdasdadadadadadadadadadad
                </p>
            </ContainerHeaderCard>

            <ContainerFooterCard>
                <strong>
                    data-da-tarefa
                </strong>

                <ContainerCardStatus>
                    <strong>
                        Concluido
                    </strong>
                </ContainerCardStatus>
            </ContainerFooterCard>
        </ContainerCard>
    )
}
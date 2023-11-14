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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis iste in necessitatibus ea at? Omnis fuga minus dolor quas facere. Fuga possimus eos neque. Obcaecati facere excepturi repellat magni molestias!
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
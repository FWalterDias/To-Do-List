import { ContainerCard, CotainerCardActions, ContainerHeaderCard, ContainerFooterCard, ContainerCardStatus } from "./styles";
import iconEdit from "../../assets/icon-editar.svg";
import iconDelete from "../../assets/icon-lixo.svg";

type CardProps = {
    title: string,
    description: string,
    date: string,
    status: number
}

export function Card({title, description, date, status}: CardProps) {
    return (
        <ContainerCard>

            <CotainerCardActions>
                <img src={iconEdit} alt="icon-Edit" />
                <img src={iconDelete} alt="icon-Delete" />
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
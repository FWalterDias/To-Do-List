import iconFilterImg from "../../assets/icon-filtro.png";
import { ContainerFilterButton } from "./styles";

export function FilterButoton() {
    return (
        <ContainerFilterButton>
            <ContainerFilterButton>
                <img src={iconFilterImg} alt="icon-filter-button" />
                <span>Filtro</span>
            </ContainerFilterButton>
        </ContainerFilterButton>
    )
}
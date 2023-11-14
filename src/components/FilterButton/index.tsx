import iconFilterImg from "../../assets/icon-filtro.png";
import { FilterButotonProps } from "../../types/types";
import { ContainerFilterButton } from "./styles";

export function FilterButoton({ filterOpen, setFilterOpen }: FilterButotonProps) {
    return (
        <ContainerFilterButton onClick={() => setFilterOpen(filterOpen ? false : true)}>
            <img src={iconFilterImg} alt="icon-filter-button" />
            <span>Filtro</span>
        </ContainerFilterButton>
    )
}
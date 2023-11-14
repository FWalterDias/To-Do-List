import iconFilterImg from "../../assets/icon-filtro.png";
import { ContainerFilterButton } from "./styles";

type FilterButoton = {
    filterOpen: boolean,
    setFilterOpen: (value: boolean) => void
}

export function FilterButoton({ filterOpen, setFilterOpen }: FilterButoton) {
    return (
        <ContainerFilterButton onClick={() => setFilterOpen(filterOpen ? false : true)}>
            <img src={iconFilterImg} alt="icon-filter-button" />
            <span>Filtro</span>
        </ContainerFilterButton>
    )
}
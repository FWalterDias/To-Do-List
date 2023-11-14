import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import Modal from "../Modal";
import { Containermain, ContainerActions } from "./styles";
import { useState } from "react";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    return (
        <Containermain>
            <ContainerActions>
                <FilterButoton />
                <Button type="task" text="Adicionar Tarefa" btnWidth="small" />
            </ContainerActions>

            {
                filterOpen &&
                <FilterOptions />
            }

            {/* <Card /> */}

            <Modal />
        </Containermain>
    )
}
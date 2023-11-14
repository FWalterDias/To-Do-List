import { useState } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import { ContainerActions, ContainerActionsButtons, ContainerTasks, Containermain } from "./styles";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(true);

    return (
        <Containermain>
            <ContainerActions>
                <ContainerActionsButtons>
                    <FilterButoton />
                    <Button type="task" text="Adicionar Tarefa" btnWidth="small" />
                </ContainerActionsButtons>
                {
                    filterOpen &&
                    <FilterOptions />
                }
            </ContainerActions>

            <ContainerTasks>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ContainerTasks>

        </Containermain>
    )
}
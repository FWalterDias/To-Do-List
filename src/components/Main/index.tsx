import { useState } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import { ContainerActions, ContainerActionsButtons, ContainerTasks, Containermain } from "./styles";
import Modal from "../Modal";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    return (
        <Containermain>
            <ContainerActions>
                <ContainerActionsButtons>
                    <FilterButoton 
                    filterOpen = {filterOpen}
                    setFilterOpen={setFilterOpen} />

                    <Button 
                    type="task" 
                    text="Adicionar Tarefa" 
                    btnWidth="small" 
                    action="openModal" />
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
                <Card />
            </ContainerTasks>
            
            <Modal />
        </Containermain>
    )
}
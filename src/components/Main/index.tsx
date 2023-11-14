import { useState } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import { ContainerActions, ContainerActionsButtons, ContainerTasks, Containermain } from "./styles";
import Modal from "../Modal";
import { TasksContext } from "../../Contexts/TasksContext";
import { useContext } from "react"
import { useAuth } from "../../hooks/useAuth";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    

    const tasks = useContext(TasksContext);

    return (
        <Containermain>
            <ContainerActions>
                <ContainerActionsButtons>
                    <FilterButoton
                        filterOpen={filterOpen}
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
                {
                    tasks.tasksList.length > 0 ?
                        tasks.tasksList.map((task) => (
                            <Card
                                key={task.id}
                                title={task.title}
                                date={task.date}
                                description={task.description}
                                status={task.status}
                            />
                        )) : "Nenhuma tarefa na lista"
                }
            </ContainerTasks>

            <Modal />
        </Containermain>
    )
}
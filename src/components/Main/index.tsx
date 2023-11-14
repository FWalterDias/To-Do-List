import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../Contexts/TasksContext";
import { useTaskStorage } from "../../hooks/useTaskStorage";
import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import Modal from "../Modal";
import { ContainerActions, ContainerActionsButtons, ContainerTasks, Containermain } from "./styles";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    const { handleGetTasks } = useTaskStorage();

    const tasks = useContext(TasksContext);

    useEffect(()=> {

        const tasksSaved = handleGetTasks();

        tasks.setTasksList(tasksSaved)

    }, [])

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
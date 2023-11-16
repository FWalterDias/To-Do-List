import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../Contexts/TasksContext";
import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import Modal from "../Modal";
import { ContainerActions, ContainerActionsButtons, ContainerTasks, Containermain } from "./styles";
import { useTasksActions } from "../../hooks/useTasksActions";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(false);
    const tasks = useContext(TasksContext);
    const { handleGetTasksUser } = useTasksActions();

    useEffect(() => {
        handleGetTasksUser();
    }, []);

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
                    tasks.filteredTaskList!.length > 0 ? (
                        tasks.filteredTaskList!.map((task) => (
                            <Card
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                date={task.date}
                                description={task.description}
                                status={task.status}
                            />
                        ))
                    ) : tasks.tasksList.length > 0 ? (
                        tasks.tasksList
                            .sort((a, b) => a.id - b.id)
                            .map((task) => (
                                <Card
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    date={task.date}
                                    description={task.description}
                                    status={task.status}
                                />
                            ))
                    ) : (
                        "Nenhuma tarefa na lista"
                    )
                }
            </ContainerTasks>

            <Modal />
        </Containermain>
    )
}
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../Contexts/TasksContext";
import api from "../../api/api";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";
import { Card } from "../Card";
import { FilterButoton } from "../FilterButton";
import { FilterOptions } from "../FitlterOptions";
import Modal from "../Modal";
import { ContainerActions, ContainerActionsButtons, ContainerTasks, Containermain } from "./styles";

export function Main() {

    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    const { handleGetToken } = useAuth();

    const tasks = useContext(TasksContext);

    useEffect(() => {
        async function handleGetTasksUser() {
            try {

                const token = handleGetToken();

                const response = await api.get("/api/ToDo", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                tasks.setTasksList(response.data)
                
            } catch (error) {
                console.log(error);
            }
        }

        handleGetTasksUser();
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
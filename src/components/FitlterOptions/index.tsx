import { useContext, useEffect } from "react";
import { FilterContext } from "../../Contexts/FilterContext";
import { TasksContext } from "../../Contexts/TasksContext";
import { ContainerFilterOptions, ContainerFilterOptionsOptions } from "./styles";

export function FilterOptions() {

    const task = useContext(TasksContext);
    const filter = useContext(FilterContext);

    const handleFilterTasks = () => {
        const allTaskts = task.tasksList;
        let filteredTasks = task.filteredTaskList!;


        if (filter.pending && !filter.done) {

            filteredTasks = allTaskts.filter((task) => task.status === 0);

            return task.setFilteredTaskList!(filteredTasks);

        } else if (!filter.pending && filter.done) {
            console.log("Entrou aqui no done");
            filteredTasks = allTaskts.filter((task) => task.status === 1);

            console.log(filteredTasks);
            return task.setFilteredTaskList!(filteredTasks);
        } else {
            return task.setFilteredTaskList!([]);
        }
    };

    useEffect(() => {
        handleFilterTasks();
    }, [filter])

    return (
        <ContainerFilterOptions>
            <span>
                Categoria
            </span>

            <ContainerFilterOptionsOptions>
                <button
                    onClick={() => filter.setPending(filter.pending ? false : true)}
                    className={filter.pending ? "pending" : ""}
                >
                    Pendente
                </button>

                <button
                    onClick={() => filter.setDone(filter.done ? false : true)}
                    className={filter.done ? "done" : ""}>
                    Concluídas
                </button>

            </ContainerFilterOptionsOptions>
        </ContainerFilterOptions >
    )
}
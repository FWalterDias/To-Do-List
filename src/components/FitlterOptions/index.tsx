import { useContext, useEffect } from "react";
import { useTasksActions } from "../../hooks/useTasksActions";
import { ContainerFilterOptions, ContainerFilterOptionsOptions } from "./styles";
import { FilterContext } from "../../Contexts/FilterContext";
import { FilterProps } from "../../types/types";

export function FilterOptions() {

    const { handleFilterTasks } = useTasksActions();
    const filter: FilterProps  = useContext(FilterContext);

    useEffect(() => {
        handleFilterTasks();
    }, [filter]);

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
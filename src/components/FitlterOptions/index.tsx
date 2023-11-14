import { ContainerFilterOptions, ContainerFilterOptionsOptions  } from "./styles";

export function FilterOptions() {
    return (
        <ContainerFilterOptions>
            <span>
                Categoria
            </span>

            <ContainerFilterOptionsOptions>
                <button>
                    Pendente
                </button>

                <button>
                    Concluídas
                </button>
            </ContainerFilterOptionsOptions>
        </ContainerFilterOptions>
    )
}
import { ContainerFilterOptions } from "./styles";

export function FilterOptions() {
    return (
        <ContainerFilterOptions>
            <span>
                Categoria
            </span>

            <div>
                <button>
                    Pendente
                </button>

                <button>
                    Concluídas
                </button>
            </div>
        </ContainerFilterOptions>
    )
}
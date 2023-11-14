import { createContext, useState } from "react";
import { FilterProps, FilterProviderProps } from "../types/types";

export const FilterContext = createContext<FilterProps>({
    done: false,
    setDone: () => {},
    pending: false,
    setPending: () => {}
});

export function FilterProvider({ children }: FilterProviderProps) {

    const [done, setDone] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(false);
    
    const errorContextValue: FilterProps = {
        done,
        setDone,
        pending,
        setPending,
    };

    return (
        <FilterContext.Provider value={errorContextValue}>
            {children}
        </FilterContext.Provider>
    )
}
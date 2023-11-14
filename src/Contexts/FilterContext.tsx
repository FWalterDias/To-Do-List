import { createContext, ReactNode, useState } from "react";

type FilterProviderProps = {
    children: ReactNode
}

type FilterProps = {
    done: boolean,
    setDone: (value: boolean) => void,
    pending: boolean,
    setPending: (value: boolean) => void
}

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
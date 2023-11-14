import { createContext, ReactNode, useState } from "react";

type ErrorProviderProps = {
    children: ReactNode
}

type ErrorProps = {
    showError: boolean,
    setShowError: (value: boolean) => void,
    errorMensage: string,
    setErrorMensage: (value: string) => void
}

export const ErrorsContext = createContext<ErrorProps>({
    showError: false,
    setShowError: () => {},
    errorMensage: "",
    setErrorMensage: () => {}
});

export function ErrorProvider({ children }: ErrorProviderProps) {

    const [showError, setShowError] = useState<boolean>(false);
    const [errorMensage, setErrorMensage] = useState<string>("");
    
    const errorContextValue: ErrorProps = {
        showError,
        setShowError,
        errorMensage,
        setErrorMensage
    };

    return (
        <ErrorsContext.Provider value={errorContextValue}>
            {children}
        </ErrorsContext.Provider>
    )
}
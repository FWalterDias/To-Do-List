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

export const ErrorsContex = createContext<ErrorProps>({
    showError: false,
    setShowError: () => {},
    errorMensage: "",
    setErrorMensage: () => {}
});

export function ErrorProvider({ children }: ErrorProviderProps) {

    const [showError, setShowError] = useState<boolean>(false);
    const [errorMensage, setErrorMensage] = useState<string>("");
    
    const userContextValue: ErrorProps = {
        showError,
        setShowError,
        errorMensage,
        setErrorMensage
    };

    return (
        <ErrorsContex.Provider value={userContextValue}>
            {children}
        </ErrorsContex.Provider>
    )
}
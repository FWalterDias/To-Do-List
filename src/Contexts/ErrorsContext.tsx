import { createContext, useState } from "react";
import { ErrorProps, ErrorProviderProps } from "../types/types";

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
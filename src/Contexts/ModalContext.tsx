import { createContext, useState } from "react";
import { ModalProps, ModalProviderProps } from "../types/types";

export const ModalContext = createContext<ModalProps>({
    isOpen: false,
    setModal: () => {},
});

export function ModalProvider({ children }: ModalProviderProps) {

    const [isOpen, setModal] = useState<boolean>(false);
    
    const modalContextValue: ModalProps = {
        isOpen,
        setModal,
    };

    return (
        <ModalContext.Provider value={modalContextValue}>
            {children}
        </ModalContext.Provider>
    )
}
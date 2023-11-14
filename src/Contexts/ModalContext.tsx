import { createContext, ReactNode, useState } from "react";

type ModalProviderProps = {
    children: ReactNode
}

type ModalProps = {
    isOpen: boolean,
    setModal: (value: boolean) => void,
}

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
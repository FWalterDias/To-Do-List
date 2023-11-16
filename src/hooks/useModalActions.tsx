import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useModalActions() {

    const modal = useContext(ModalContext);

    function handleOpenModal() {
        modal.setModal(true);
    }

    function handleCloseModal() {
        modal.setModal(false);
    }

    return {
        handleOpenModal,
        handleCloseModal
    }
}
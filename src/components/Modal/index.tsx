import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import iconCloseModal from "../../assets/icon-close-modal.svg";
import { Form } from "../Form";
import { ContainerModal, ContainerModalForm } from "./styles";

export default function Modal() {

    const modal = useContext(ModalContext);
    return (
        <>
            {
                modal.isOpen &&
                <ContainerModal>
                    <ContainerModalForm>
                        <img
                            src={iconCloseModal}
                            alt="icon-close-modal"
                            onClick={() => modal.setModal(false)} />

                        <Form type="addTask" />
                    </ContainerModalForm>
                </ContainerModal >
            }
        </>
    )
}
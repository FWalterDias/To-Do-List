import { Form } from "../Form";
import { ContainerModal, ContainerModalForm } from "./styles";
import iconCloseModal from "../../assets/icon-close-modal.svg"

export default function Modal() {
    return (
        <ContainerModal>
            <ContainerModalForm>
                <img
                    src={iconCloseModal}
                    alt="icon-close-modal" />
                    
                <Form type="addTask" />
            </ContainerModalForm>
        </ContainerModal >
    )
}
import { useState } from "react";
import { Button } from "../../Button";
import { ButtonsWrapper, ContainerFormSignUp, InputWrapper } from "./styles";

export function FormAddTask() {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("Pendente");

    return (
        <ContainerFormSignUp>
            <fieldset>
                <legend> Adicionar Tarefa </legend>

                <InputWrapper>
                    <label htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="description">Descrição:</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Pendente">Pendente</option>
                        <option value="Concluído">Concluído</option>
                    </select>
                </InputWrapper>
            </fieldset>

            <ButtonsWrapper>
                <Button type="task" text="Confirmar" btnWidth="small" />
            </ButtonsWrapper>
        </ContainerFormSignUp>
    )
}
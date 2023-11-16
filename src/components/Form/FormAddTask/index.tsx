import { useContext } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";
import { Button } from "../../Button";
import { ButtonsWrapper, ContainerFormSignUp, InputWrapper } from "./styles";
import { ErrorsContext } from "../../../Contexts/ErrorsContext";
import { ErrorComponent } from "../../ErrorComponent";
import { ErrorProps, TasksProps } from "../../../types/types";

export function FormAddTask() {

    const tasks: TasksProps = useContext(TasksContext);
    const error: ErrorProps = useContext(ErrorsContext);

    return (
        <ContainerFormSignUp>
            <fieldset>
                <legend> Adicionar Tarefa </legend>

                <InputWrapper>
                    <label htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        value={tasks.title}
                        onChange={(e) => tasks.setTitle(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        value={tasks.description}
                        onChange={(e) => tasks.setDescription(e.target.value)}
                        rows={4}
                        cols={50}
                    />
                </InputWrapper>
                {error.showError && <ErrorComponent text={error.errorMensage} />}
            </fieldset>

            <ButtonsWrapper>
                <Button type="task" text="Confirmar" btnWidth="small" action="addTask" />
            </ButtonsWrapper>
        </ContainerFormSignUp>
    )
}
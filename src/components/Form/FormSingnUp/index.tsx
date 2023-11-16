import { useContext } from "react";
import { Link } from "react-router-dom";
import { ErrorsContext } from "../../../contexts/ErrorsContext";
import { UserContext } from "../../../contexts/UserContext";
import { Button } from "../../../components/Button";
import { ErrorComponent } from "../../ErrorComponent";
import { ButtonsWrapper, ContainerFormSignUp, InputWrapper } from "./styles";

export function FormSignUp() {

    const userValues = useContext(UserContext);
    const error = useContext(ErrorsContext);

    return (
        <ContainerFormSignUp>
            <fieldset>
                <legend> Cadastrar-se </legend>

                <InputWrapper>
                    <label htmlFor="name">Nome:</label>
                    <input
                        id="name"
                        type="text"
                        value={userValues?.user}
                        onChange={(e) => userValues?.setUser(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="userName">Nome de Usuario:</label>
                    <input
                        id="userName"
                        type="text"
                        value={userValues?.userName}
                        onChange={(e) => userValues?.setUserName(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="password">Senha:</label>
                    <input
                        id="password"
                        type="password"
                        value={userValues?.password}
                        onChange={(e) => userValues?.setPassWord(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="confirmPassword">Confirmação de Senha:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={userValues?.confirmPassword}
                        onChange={(e) => userValues?.setConfirmPassWord(e.target.value)}
                    />
                </InputWrapper>
            </fieldset>
            {error.showError && <ErrorComponent text={error.errorMensage} />}

            <ButtonsWrapper>
                <Button
                    type="signup"
                    text="Cadastrar"
                    btnWidth="biggest"
                    action="signup" />
            </ButtonsWrapper>

            <strong>Já tem cadastro?
                <Link to="/" >Clique Aqui</Link>
            </strong>
        </ContainerFormSignUp>
    )
}
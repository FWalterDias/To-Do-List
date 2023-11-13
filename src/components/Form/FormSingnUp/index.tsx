import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import { ContainerFormSignUp, InputWrapper, ButtonsWrapper } from "./styles";
import { useState } from "react";

export function FormSignUp() {

    const [name, setName] = useState < string > ("");
    const [userName, setUserName] = useState < string > ("");
    const [password, setPassword] = useState < string > ("");
    const [confirmPassword, setConfirmPassword] = useState < string > ("");

    return (
        <ContainerFormSignUp>
            <fieldset>
                <legend> Cadastrar-se </legend>

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
                    <label htmlFor="userName">Nome de Usuario:</label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="password">Senha:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="confirmPassword">Confirmação de Senha:</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </InputWrapper>
            </fieldset>

            <ButtonsWrapper>
                <Button type="signup" text="Cadastrar" />
            </ButtonsWrapper>

            <strong>Já tem cadastro? 
                <Link to="/" >Clique Aqui</Link>
            </strong>
        </ContainerFormSignUp>
    )
}
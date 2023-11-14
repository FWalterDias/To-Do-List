import { Button } from "../../Button/index.tsx";
import { ContainerFormSignIn, InputWrapper, ButtonsWrapper } from "./styles.ts";
import { useState } from "react";

export function FormSignIn() {

    const [userName, setUserName] = useState < string > ("");
    const [password, setPassword] = useState < string > ("");

    return (
        <ContainerFormSignIn>
            <fieldset>
                <legend> Login </legend>

                <InputWrapper>
                    <label htmlFor="userName">Nome de Usuario</label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputWrapper>
            </fieldset>

            <ButtonsWrapper>
                <Button type="signin" text="Entrar" btnWidth="biggest" />

                <Button type="signup" text="Cadastrar-se" btnWidth="biggest" />
            </ButtonsWrapper>

            <strong>Entrar sem cadastro</strong>
        </ContainerFormSignIn>
    )
}
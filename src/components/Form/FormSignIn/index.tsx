import { Button } from "../../Button/index.tsx";
import { ContainerFormSignIn, InputWrapper, ButtonsWrapper } from "./styles.ts";
import { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext.tsx";
import { ErrorComponent } from "../../ErrorComponent/index.tsx";

export function FormSignIn() {

    const userValues = useContext(UserContext);
    const [showError, setShowError] = useState<boolean>(false)

    return (
        <ContainerFormSignIn>
            <fieldset>
                <legend> Login </legend>

                <InputWrapper>
                    <label htmlFor="userName">Nome de Usuario</label>
                    <input
                        id="userName"
                        type="text"
                        value={userValues?.userName}
                        onChange={(e) => userValues?.setUserName(e.target.value)}
                    />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        value={userValues?.password}
                        onChange={(e) => userValues?.setPassWord(e.target.value)}
                    />
                </InputWrapper>
            </fieldset>
            {showError && <ErrorComponent text="Preencha todos os campos" />} 

            <ButtonsWrapper>
                <Button 
                type="signin" 
                text="Entrar"
                btnWidth="biggest"
                action="signin"
                setShowError={setShowError}
                  />

                <Button 
                type="signup" 
                text="Cadastrar-se" 
                btnWidth="biggest"
                setShowError={setShowError} />
            </ButtonsWrapper>

            <strong>Entrar sem cadastro</strong>
        </ContainerFormSignIn>
    )
}
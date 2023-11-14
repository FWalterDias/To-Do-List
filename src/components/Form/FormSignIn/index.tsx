import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorsContext } from "../../../Contexts/ErrorsContext.tsx";
import { UserContext } from "../../../Contexts/UserContext.tsx";
import api from "../../../api/api.tsx";
import { useAuth } from "../../../hooks/useAuth.tsx";
import { Button } from "../../Button/index.tsx";
import { ErrorComponent } from "../../ErrorComponent/index.tsx";
import { ButtonsWrapper, ContainerFormSignIn, InputWrapper } from "./styles.ts";

export function FormSignIn() {

    const userValues = useContext(UserContext);
    const error = useContext(ErrorsContext);
    const navigate = useNavigate();
    const { handleAddToken, handleAddUserName } = useAuth();

    async function handleLoginVisitor() {
        try {
            const user = {
                "username": userValues.visitor.userName,
                "password": userValues.visitor.password
            }

            const response = await api.post("/api/Auth", user);

            const { token } = response.data;

            handleAddToken(token);

            handleAddUserName(user.username);

            navigate("/home");
        } catch (error) {
            alert("Não foi possivel fazer o login")
        }
    }

    return (
        <ContainerFormSignIn>
            <fieldset>
                <legend> Login </legend>

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
            </fieldset>
            {error.showError && <ErrorComponent text={error.errorMensage} />}

            <ButtonsWrapper>
                <Button
                    type="signin"
                    text="Entrar"
                    btnWidth="biggest"
                    action="signin" />

                <Button
                    type="signup"
                    text="Cadastrar-se"
                    btnWidth="biggest" />
            </ButtonsWrapper>

            <strong onClick={handleLoginVisitor}>Entrar sem cadastro</strong>
        </ContainerFormSignIn>
    )
}
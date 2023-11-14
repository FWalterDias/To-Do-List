import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ContainerHome } from "./styles"

export function Home() {
    return (
        <ContainerHome>
            <Header userName="johan" />
            <Main />
        </ContainerHome>
    )
}
import { ErrorComponentProps } from "../../types/types"
import { ContainerError } from "./styles"


export function ErrorComponent({ text }: ErrorComponentProps) {
    return (
        <ContainerError>
            {text}
        </ContainerError>
    )
}
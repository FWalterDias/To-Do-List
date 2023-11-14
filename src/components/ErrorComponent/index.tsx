import { ContainerError } from "./styles"

type ErrorComponentProps = {
    text: string
}

export function ErrorComponent({ text }: ErrorComponentProps) {
    return (
        <ContainerError>
            {text}
        </ContainerError>
    )
}
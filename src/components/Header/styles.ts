import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
    align-items: center;

    width: 100%;
    height: 22.5rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR_GRADIENT};
`
export const ContainerProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 1.1rem;

    strong{
        width: 10rem;
        text-align: center;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: "Roboto", sans-serif;
        font-size: 1.4rem;
        font-weight: 700;
    }
`
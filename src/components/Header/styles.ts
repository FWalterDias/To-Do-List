import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
    align-items: center;

    width: 100%;
    height: 25rem;

    padding: 2rem 0;

    background: ${({theme}) => theme.COLORS.BACKGROUND_LINEAR_GRADIENT};

    @media (min-width: 1200px){
        flex-direction: row;
        height: 20rem;
        justify-content: space-between;
        align-items: center;

        padding: 0 10rem 8rem 10rem;
    }
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
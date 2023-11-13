import styled from "styled-components";

export const ContainerSigIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR_GRADIENT};

    padding: 1rem;

    .img-signin{
        width: min(32.5rem, 100%);
        max-width: 65rem;
    }
`
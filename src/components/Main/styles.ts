import styled from "styled-components";

export const Containermain = styled.main`
    background-color: ${({theme}) => theme.COLORS.WHITE};

    margin-top: -7rem;
    padding: 0 1rem;

    border-radius: 6rem 6rem 0px 0px;
`

export const ContainerActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;

    padding: 3.6rem 2rem;
`
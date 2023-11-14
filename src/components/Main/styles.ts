import styled from "styled-components";

export const Containermain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    margin-top: -7rem;
    padding: 0 1rem;
    
    background-color: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 6rem 6rem 0px 0px;
`

export const ContainerActions = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100rem;
    width: 100%;
    padding: 0 2rem;
`

export const ContainerActionsButtons = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;

        padding: 3.6rem 0;

        @media (min-width:1200px) {
            padding-bottom: 1rem;
        }
`

export const ContainerTasks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 100rem;

    padding: 1rem;
    margin-bottom: 2rem;

    background-color: red;

    @media (min-width: 1200px){
        max-height: 60rem;
        overflow-y: scroll;
    }
`
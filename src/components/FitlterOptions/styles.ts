import styled, { keyframes } from "styled-components";

const fadeInConatinerFilter = keyframes`
    from {
        opacity: 0;
        transform: translateY(-25%);
        }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const ContainerFilterOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;
    max-width: 30rem;

    padding: 3.2rem 0 2.7rem 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_WHITE};

    border-radius: 10px; 
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.10);

    animation: ${fadeInConatinerFilter} .5s ease-in-out;

    span{
        color:  ${({ theme }) => theme.COLORS.LIGTH_GRAY};
        font-family: "Roboto";
        font-size: 1.2rem;
        font-weight: 600;
    }

    div{
        display: flex;
        gap: 2.4rem;
    }

`

export const ContainerFilterOptionsOptions = styled.div`
    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 8rem;
        height: 2rem; 

        padding: .4rem 1.3rem;

        border-radius: 10px;
        border: none;
        background: ${({ theme }) => theme.COLORS.WHITE};
        box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.10); 

        font-family: "Roboto";
        font-size: 1rem,;
        font-weight: 400; 

        cursor: pointer;

        &.pending, &.done{
            background-color: ${({ theme }) => theme.COLORS.PURPLE};
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`
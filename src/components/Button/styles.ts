import styled from "styled-components";

export const ContainerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32rem;
    height: 5rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 2rem;
    font-weight: 400; 
    font-family: "Roboto";

    border: none;
    border-radius: .5rem; 

    cursor: pointer;

    transition: opacity .3s ease-in-out;

    &:hover{
        opacity: .9;
    }

    &.signin{
        background-color: ${({ theme }) => theme.COLORS.GREEN};
    }

    &.signup{
        background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    }

    &.task{
        background-color: ${({ theme }) => theme.COLORS.PURPLE};
    }
`
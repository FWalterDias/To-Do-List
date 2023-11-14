import styled from "styled-components";

export const ContainerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 2rem;
    font-weight: 400; 
    font-family: "Roboto";

    border: none;
    border-radius: .5rem; 
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.30);


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

    &.biggest{
        width: 32rem;
    }

    &.small{
        width: 16rem;
    }
`
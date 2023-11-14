import styled from "styled-components";

export const ContainerFilterButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;

    width: 8rem;
    height: 3rem;

    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.DARK_WHITE};
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.10); 

    cursor: pointer;

    span{
        color: ${({ theme }) => theme.COLORS.DARK_GRAY};
        font-family:"Roboto", sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
    }
`
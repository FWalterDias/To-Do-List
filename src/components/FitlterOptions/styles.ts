import styled from "styled-components";

export const ContainerFilterOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;

    padding: 3.2rem 0 2.7rem 2rem;

    background-color: ${({theme}) => theme.COLORS.DARK_WHITE};

    border-radius: 10px; 
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.10);

    span{
        color:  ${({theme}) => theme.COLORS.LIGTH_GRAY};
        font-family: "Roboto";
        font-size: 1.2rem;
        font-weight: 600;
    }

    div{
        display: flex;
        gap: 2.4rem;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 8rem;
        height: 2rem; 

        padding: .4rem 1.3rem;

        border-radius: 10px;
        border: none;
        background: ${({theme}) => theme.COLORS.WHITE};
        box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.10); 

        cursor: pointer;
    }
`
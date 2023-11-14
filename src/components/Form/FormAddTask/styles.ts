import styled from "styled-components";

export const ContainerFormSignUp = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 50rem;

    padding: 0 1.2rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 1rem; 

    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.30);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.50);

    fieldset{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
        width: 100%;
        
        border: none;

        legend{
            display: flex;
            justify-content: center;

            width: 100%;
            margin: 4rem 0 2rem 0;
            
            font-size: ${({ theme }) => theme.FONTS.FORM_TITLE};
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.DARK_GRAY};
            white-space: nowrap;
        }
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;


    width: 100%;

    label, input{
        width: 100%;
        
        font-size: ${({ theme }) => theme.FONTS.FORM_INPUT};
        color: ${({ theme }) => theme.COLORS.DARK_GRAY};
    }

    input, select, option{
        height: 4rem; 
        border: 1px solid #555; 
        border-radius: .5rem; 
        padding: 1rem;
        font-family: "Roboto Condensed", sans-serif;

    }

    select{
        background: none;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    margin: 4.7rem 0 1.7rem 0;
`
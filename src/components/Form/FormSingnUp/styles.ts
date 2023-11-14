import styled, {keyframes} from "styled-components";

const fadeInFormSigup = keyframes`
    from{
        transform: translatey(50%);
        opacity: .5;
    }
`

export const ContainerFormSignUp = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 50rem;

    padding: 0 1.2rem;
    margin-bottom: 2rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.50);
    border-radius: 1rem; 

    animation: ${fadeInFormSigup} 1s ease-in-out;

    
    fieldset{
        display: flex;
        flex-direction: column;
        gap: 2.8rem;
        
        width: 100%;
        
        border: none;

        legend{
            display: flex;
            justify-content: center;

            width: 100%;
            margin: 2.8rem 0;

            font-family: "Roboto", sans-serif;
            font-size: ${({ theme }) => theme.FONTS.FORM_TITLE};
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.DARK_GRAY};
        }
    }

    strong{
        margin-bottom: 10rem;

        color: ${({ theme }) => theme.COLORS.DARK_GRAY};
        text-align: center;
        font-size: 1.6rem;
        font-weight: 600; 

        cursor: pointer;

        a{
            text-decoration: none;
            color:  ${({ theme }) => theme.COLORS.DARK_GRAY};
            &:hover{
                color: ${({ theme }) => theme.COLORS.RED};
            }
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

    input{
        height: 60px; 
        border: 1px solid #555; 
        border-radius: .5rem; 
        padding: 1rem;
        font-family: "Roboto Condensed", sans-serif;

    }

`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    margin: 4.7rem 0 1.7rem 0;
`
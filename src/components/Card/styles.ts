import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 13rem;

    padding: 1.5rem 2.7rem;

    border-radius: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.20); 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    background-color: ${({ theme }) => theme.COLORS.DARK_WHITE};

    color: ${({ theme }) => theme.COLORS.DARK_GRAY};

    position: relative;
`
export const CotainerCardActions = styled.div`
    display: flex;
    gap: 1.3rem;

    position: absolute;
    right: 15px;
    top: 15px;

    img{
        cursor: pointer;
    }
`

export const ContainerHeaderCard = styled.div`
    width: 80%;

    h3{
        font-size: 2rem;
        font-weight: 600; 
        cursor: pointer;
    }

    p{
        font-size: 1.6rem;
        font-weight: 500; 
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (min-width: 1200px){
        width: 50%;
    }
`

export const ContainerFooterCard = styled.div`
    strong{
        font-size: 1.4rem;
        font-weight: 400; 
    }

`

export const ContainerCardStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8rem;
    height: 1.5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN};

    strong{
        font-weight: 700; 
        font-size: 1.4rem;
    }
`
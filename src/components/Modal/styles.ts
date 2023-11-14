import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100vw;
    min-height: 100vh;

    backdrop-filter: blur(5px);
`

export const ContainerModalForm = styled.div`
    position: fixed;
    z-index: 100;

    width: min(35rem, 80%);

    background-color: #FFFFFF;
    color: #000000;
    border-radius: 1rem;

    img{
        position: absolute;
        top: 1rem;
        right: 1rem;

        width: 3rem;
        height: 3rem;

        object-fit: none;

        transition:  background-color .2s ease-in-out;

        cursor: pointer;

        &:hover{
            background-color: ${({theme}) => theme.COLORS.LIGTH_GRAY};
        }
    }
`


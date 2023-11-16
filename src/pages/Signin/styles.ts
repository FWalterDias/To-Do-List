import styled, {keyframes} from "styled-components";

const fadeInImgLogin = keyframes`
    from{
        transform: translateX(-25%);
        opacity: .5;
    }
`

export const ContainerSigIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR_GRADIENT};

    padding: 2rem 1rem;

    .img-signin{
        width: min(32.5rem, 100%);
        max-width: 65rem;

        animation: ${fadeInImgLogin} .5s ease-in-out;
    }

    @media (min-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;

        position: relative;

        .logo{
            position: absolute;
            margin: 0;
            top: 4.3rem;
            left: 10rem;
        }

        .img-signin{
            width: max(32.5rem, 100%);
        }
    }
`
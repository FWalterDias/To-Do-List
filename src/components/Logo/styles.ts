import styled from "styled-components";

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.7rem;

    margin-top: 2.6rem;

    font-size: ${({ theme }) => theme.FONTS.PROFILE_AREA};
    color: ${({ theme }) => theme.COLORS.WHITE};

    img{
        width: 4.5rem;
        height: 4.5rem;
    }
`
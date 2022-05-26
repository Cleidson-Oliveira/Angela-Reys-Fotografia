import styled from "styled-components";

interface SocialIconsProps {
    colorIcon: string
}

export const Wrapper = styled.footer`
    width: 100%;
    height: 150px;
    background: #ffeee2;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        height: 70px;
        max-width: 260px;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;

        li {
            box-sizing: border-box;
            width: 70px;
            height: 70px;
            padding: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const SocialIcons = styled.a<SocialIconsProps>`
    font-size: 2.5em;
    transition: .5s;
    color: ${props => props.colorIcon};

    &:hover {
        font-size: 3em;
    }
`;

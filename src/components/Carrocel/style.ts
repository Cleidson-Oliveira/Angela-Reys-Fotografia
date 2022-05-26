import styled from 'styled-components';

interface CardSlideProps {
    backGroundImg: string
}

export const CardSlide = styled.div<CardSlideProps>`
    background-image: url(${props => props.backGroundImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vw;
`;
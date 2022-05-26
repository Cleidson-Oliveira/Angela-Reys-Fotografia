import styled from "styled-components";

export const Wrapper = styled.div`
    width: ${props => props.widthCards};
    position: relative;

    a{
        display: flex;
        height: 100%;
    }

    img{
        width: 100%;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: rgba(0, 0, 0, .5);
        color: white;
        font-size: 1.2em;
        transition: .5s;
        opacity: 0;

        p{
            display: block;
            padding: 10px;
        }
    }
    
    &:hover span{
        opacity: 1;
        cursor: pointer;
    }

    @media(max-width: 700px){
        width: 50%;
    }
    
    @media(max-width: 400px){
        width: 100%;
    }
`;

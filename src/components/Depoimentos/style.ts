import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #ccc;

    @media(max-width: 450px){
        padding-bottom: 15px; 
    }
;`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
`;

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 390px;
    width: 28%;
    
    img {
        width: 40%;
        border-radius: 50%;
        padding: 10px 0;
    }

    p {
        text-align: center;
        padding: 10px 0;
        line-height: 1.8em;
    }

    p:first-of-type {
        text-transform: uppercase;
    }

    @media(max-width: 450px){
        min-width: 80vw;
        
        p {
            line-height: 1.4em;
            font-size: .9em;
        }
    }
`;
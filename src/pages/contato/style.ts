import styled from "styled-components";

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: row;
    padding: 20px;
    
    & > div {
        padding: 20px;
    }

    & > div:first-child{
        flex-grow: 3;
    }

    & > div:last-child{
        flex-grow: 1;
    }

    & .buttonConteiner{
        justify-content: flex-start;
        font-size: 1.2em;
    }

    @media(max-width: 800px){
        flex-direction: column;
        
        & > div:last-child {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const Title = styled.div`
    display: flex;

    h1 {
        color: rgb(255,123,34);
    }
`;

export const ContactField = styled.div`
    h3 {
        margin: 15px 0 8px;
    }
    p {
        margin: 8px 0;
    }
    img {
        border-radius: 50%;
        width: 200px;
    }
`;

export default Wrapper;
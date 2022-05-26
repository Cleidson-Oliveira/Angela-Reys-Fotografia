import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    
    & > div {
        width: 50%;
        padding: 50px 20px 10px;
    }
    & h1 {
        font-weight: 300;
        color: rgb(255, 123, 34);
        margin-bottom: 30px;
    }
    & p {
        font-size: 1.3em;
        color: #a8968a;
        text-align: justify;
    }
    & img {
        width: 100%;
    }

    @media(max-width: 850px) {
        display: flex;
        flex-direction: column;

        & > div {
            width: 80%;
            margin: auto;
        }
    }
    @media(max-width: 500px) {
        margin: 0;

        & > div {
            width: 85%;
            padding: 15px 0px;
        }
    }
`;
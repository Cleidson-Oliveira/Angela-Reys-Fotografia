import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    h1 { 
        color: rgb(255, 123, 34);
        line-height: 3em;
        font-weight: 100;
    }

    @media screen and (max-width: 500px) {
        h1 { 
            font-size: 1.2em;
        }
    }
`;

export const EnsaioContent = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & img {
        width: 100%;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 500px) {
        width: 95%;
    }
`;

export default Wrapper;
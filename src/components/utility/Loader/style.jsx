import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
    height: 100vh;

    div:first-child {
        animation: spin 1s infinite;
        font-size: 1.5em;
    }

    p {
        text-align: center;
        font-size: 1.5em;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`
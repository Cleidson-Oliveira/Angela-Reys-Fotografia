import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    button {
        padding: 10px 25px;
        border: none;
        border-radius: 5px;
        background-color: rgb(255, 123, 34);
        font-size: 1em;
        color: white;
        transition: .5s;

        &:hover {
            box-shadow: black 4px 4px 12px;
            padding: 15px 30px;
            font-size: 1.1em;
        }
    }

    @media only screen and (max-width: 1000px) {
        height: 70px;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 450px){
        button{
            padding: 5px 15px;
        }
        button:hover {
            padding: 10px 20px;
        }
    }
`
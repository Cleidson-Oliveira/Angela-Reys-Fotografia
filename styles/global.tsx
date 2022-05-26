import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: "montserrat-medium", "montserrat-medium-500", "Montserrat", sans-serif;
    }

    iframe {
        border: 0px;
    }

    a{
        text-decoration: none;
        color: white;
    }

    .title h1{
        text-transform: uppercase;
        color: rgb(255, 123, 34);
        font-weight: 100;
        font-size: 1.7em;
        line-height: 3em;
        text-align: center;
    }

    .title .lowercase {
        text-transform:none;
    }

    .carouselItem{
        width: 100vw;
        overflow: hidden;
    }
    
    @media (max-width: 1000px){
        .carrocel-conteiner {
            display: none;
        }
    }
    @media (max-width: 700px){
        .title h1{
            font-size: 1.4em;
        }
    }
    @media (max-width: 550px){
        .title h1{
            font-size: 1.1em;
        }
    }
    @media (max-width: 450px){
        .title h1{
            font-size: 1em;
        }
    }
`;


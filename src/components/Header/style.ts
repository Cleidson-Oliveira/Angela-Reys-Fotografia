import styled from "styled-components";

interface HeaderProps {
    isHome?: boolean,
    isOpenMenuMobile?: boolean,
    close?: boolean
}

export const Wrapper = styled.header<HeaderProps>`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.isHome ? "#ff7a220" : "#ff7b22"};
    position: ${props => props.isHome ? "absolute" : "relative"};
    z-index: 10;

    img {
        width: 200px;
        margin-left: 60px;
    }

    @media (max-width: 1000px){
        background-color: rgb(255, 123, 34);
        position: relative;
        z-index: 10; 
    }

    @media (max-width: 850px){
        img {
            width: 150px;
            margin-left: 30px;
        }
    }

    @media(max-width: 700px){
        display: flex;
        background: rgb(255, 123, 34);

        align-items: center;
        justify-content: space-between;
        position: relative;
        top: 0;
        margin: 0;
        z-index: 100;
    }

    @media(max-width: 400px){
        img {
            margin-left: 20px;
        }
    }
`;

export const Menu = styled.ul<HeaderProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;

    li {
        word-wrap: normal;
        list-style: none;
        padding: 20px 25px;
        margin-right: 15px;
        overflow: hidden;
        position: relative;

        a {
            text-decoration: none;
            color: #fff8f3;
            font-size: 1.2em;
            transition: left 0.5s;
        }

        &:hover a {
            color: ${props => props.isHome ? "#ff7a22" : "#ccc"};
        }

        &:hover::before{
            left: 0%;
        }
        
        &::before {
            content: "";
            display: block;
            width: 99%;
            height: 5px;
            border-radius: 5px;
            position: absolute;
            left: -100%;
            top: 0;
            transition: left 0.5s;
            background-color: ${props => props.isHome ? "#ff7a22" : "#ccc"};
        }
    }
    @media (max-width: 1000px){
        
        li:hover a{
            color: #ccc;
        }
        li::before {
            background: #ccc;
        }
    }

    @media (max-width: 850px){
        li{
            padding: 20px 15px;
            margin-right: 5px;
        }
        
    }

    @media(max-width: 700px){
        
        display: ${props => props.isOpenMenuMobile ? "flex" : "none"};    
        background: rgb(255, 123, 34);
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        margin: 0;
        z-index: 100;
    }
`;

export const ButtonToggleMenuMobile = styled.button<HeaderProps>`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    margin: 30px;
    top: 0;
    right: 0;

    @media(max-width: 700px){
        display: flex;
        color: rgb(255, 255, 255);
        font-size: 2.5em;
        position: ${props => props.close ? "absolute" : "relative"};
    }

    @media(max-width: 400px){
        font-size: 2em;
        margin-right: 20px;
    }
`;
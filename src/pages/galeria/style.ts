import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
`;

export const ListaTiposEnsaios = styled.div`
    width: 100%;
    padding: 15px 0;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        overflow-x: scroll;

        &::-webkit-scrollbar{
            display: none;
        }

        li {
            padding: 5px 20px;
            margin: 15px 0;
            border-right: 1px solid rgb(184, 152, 140);
            border-left: 1px solid rgb(161, 121, 106);

            &:first-child{
                border-left: none;
            }
            &:last-child{
                border-right: none;
            }
            a{
                color: rgb(202, 147, 127);
                transition: .5s;
                text-transform: uppercase;
                font-size: 1.3em;
                white-space: nowrap;
                
                &:hover{
                    color: rgb(119, 84, 71);
                }
            }
        }
    }

    @media (max-width: 1000px) {
        ul li a {
            font-size: 1.2em;
        }
    }

    @media (max-width: 800px) {
        ul {
            justify-content: flex-start;
        }

        ul li a {
            font-size: 1.1em;
        }
    }

    @media (max-width: 600px) {
        ul li a {
            font-size: 1em;
        }
    }

    @media (max-width: 500px) {
        ul li a {
            font-size: .8em;
        }
    }
`;

export const EnsaiosContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

export default Wrapper;
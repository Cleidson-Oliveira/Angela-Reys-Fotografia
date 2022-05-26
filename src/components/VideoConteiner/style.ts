import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VideoWindow = styled.div`
    iframe{
        width: 850px;
        height: 480px;
    }

    @media(max-width: 900px){
        iframe{
            width: 80vw;
            height: 45vw
        }
    }
`;
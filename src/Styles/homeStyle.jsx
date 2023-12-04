import styled from "styled-components"

export const SectionHome = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80vh;

        @media (max-width: 460px){
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
`

export const H1 = styled.h1`
    width: 6em;
    color: #FFFFFF;
    font-size: 3em;
    font-family: 'Roboto', sans-serif;

        @media (max-width: 460px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2vh;
        }
`

export const Span = styled.span`
    color: #00D2DF;
    font-family: 'DM Sans', sans-serif;
`

export const H3 = styled.h3`
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;

        @media (max-width: 460px) {
            display: flex;
            justify-content: center;
        }
`

export const Button = styled.button`
    margin: 10px;
    font-size: 11px;
    color: #FFFFFF;
    border-radius: 5px;
    border-color: #00D2DF;
    width: 7vw;
    height: 5vh;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

        @media (max-width: 460px) {
            width: 50%;
            font-size: 12px;
        }
`

export const Img = styled.img`
    width: 1.5vw;

        @media (max-width: 460px) {
            width: 7vw;
        }
`

export const Nav = styled.nav`
    display: flex;
`

export const Workdev = styled.img`
    width: 35%;

        @media (max-width: 460px) {
            width: 55%;
        }
`

export const nameButton = styled.span`
    color: #FFFFFF;

        @media (max-width: 460px) {
            display: none;
        }
`

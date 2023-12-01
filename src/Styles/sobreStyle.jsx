import styled from "styled-components"

export const Img = styled.img`
    width: 17em;
    border-radius: 100%;
`

export const Sobre = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 7%;

        @media (max-width: 460px) {
            flex-direction: column;
        }
`

export const H2 = styled.h2`
    font-family: 'DM Sans', sans-serif;
    color: #00D2DF;
    margin: 1em;

        @media (max-width: 460px) {
            display: flex;
            justify-content: center;
        }
`

export const Figure = styled.figure`
    text-align: center;
    color: #00D2DF;
    font-family: 'DM Sans', sans-serif;
`

export const P = styled.p`
    width: 28em;
    text-align: justify;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    margin: 2em;

        @media (max-width: 460px) {
            width: 80%;
        }
`

export const Button = styled.button`
    margin: 1vw;
    width: 7vw;
    height: 5vh;
    border-radius: 5px;
    border-color: #00D2DF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

        @media (max-width: 460px) {
            width: 50%;
        }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;

`

export const Logo = styled.img`
    width: 1.7vw;

        @media (max-width: 460px) {
            width: 7vw;
        }
`

export const A = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
`

export const Span = styled.span`
    color: #FFFFFF;

        @media (max-width: 460px) {
            display: none;
        }
`
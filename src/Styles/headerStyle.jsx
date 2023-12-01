import styled from "styled-components"

export const StyleHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

        @media (max-width: 460px) {
            border: solid;
        }
`

export const H1 = styled.h1`
    font-family: 'DM Sans', sans-serif;
    color: #00D2DF;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 100%;

        @media (max-width: 460px) {
            border: solid;
        }
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
;

    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`

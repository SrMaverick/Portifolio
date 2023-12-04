import styled from "styled-components"

export const StyleHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;

        @media (max-width: 460px) {
            flex-direction: column;
        }
`

export const H1 = styled.h1`
    font-family: 'DM Sans', sans-serif;
    color: #00D2DF;

        @media (max-width: 460px) {
            text-align: center;
        }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 25vw;

        @media (max-width: 460px) {
            width: 100%;
            margin-top: 1em;
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

        @media (max-width: 460px){
            justify-content: space-around;
            width: 100%;
        }


    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`

import styled from "styled-components"



export const Section = styled.section`
    margin: 2em;
    display: flex;
    justify-content: space-around;

        @media (max-width: 460px){
            flex-direction: column;
            align-items: center;
        }
`

export const Div = styled.div`
    padding: 2em;
`


export const Img = styled.img`
    width: 30vw;
    border-left: solid;
    border-color: #00D2DF;
    border-top-right-radius: 25px;

        @media (max-width:460px){
            width: 70vw;
        }
`

export const Figure = styled.figure`
    display: flex;
    justify-content: space-around;
`

export const P = styled.p`
    margin-top: 1em;
    width: 30vw;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    text-align: justify;

        @media (max-width: 460px){
            width: 70vw;
        }
`

export const Figcaption = styled.figcaption`
    color: #00D2DF;
    font-family: 'DM Sans', sans-serif;
`

export const H5 = styled.h5`
    margin-top: 1em;
    color: #00D2DF;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
`

export const Button = styled.button`
    margin-top: 1em;
    border-radius: 5px;
    border-color: #00D2DF;
    width: 10vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

        @media (max-width: 460px){
            width: 50%;
        }
`

export const A = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;

        @media (max-width: 460px){
            font-size: 12px;
        }
`

export const logoButton = styled.img`
    width: 1.5vw;
    margin-right: 1em;

        @media (max-width: 460px){
            width: 4vw;
        }
`


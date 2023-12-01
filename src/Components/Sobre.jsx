import React from "react"
import Eu from "../assets/Eu.svg"
import * as S from "../Styles/sobreStyle"
import Github from "../assets/github.svg"
import Linkedlin from "../assets/linkedlin.svg"

function Sobre(){
    return(
       <S.Sobre>
        <S.Figure>
            <S.Img src={Eu} alt="minha_foto" />
            <figcaption>Michael Douglas - Dev Front-End</figcaption>
                <S.Nav>
                    <S.Button>
                        <S.A href="https://github.com/SrMaverick" target="_blank">
                        <S.Logo src={Github} alt="" />
                        <S.Span>Github</S.Span>
                        </S.A>
                    </S.Button>
                    <S.Button>
                        <S.A href="https://www.linkedin.com/in/michael-douglas-12b3a522b/" target="_blank">
                        <S.Logo src={Linkedlin} alt="" />
                        <S.Span>Linkedlin</S.Span>
                        </S.A>
                    </S.Button>
                </S.Nav>
        </S.Figure>
        <div>
            <S.H2>Michael Douglas</S.H2>
            <S.P>Olá, eu sou Michael Douglas, 26 anos, natural de Santo André, São Paulo. 
                Desenvolvedor Front-end formado na Academia VaiNaWeb. Apaixonado por tecnologia desde os 9 anos de idade, 
                aos 11 fiz meu primeiro curso de informatica, desde então, nunca mais larguei essa paixão.</S.P>
        </div>
       </S.Sobre>
    )
}
export default Sobre
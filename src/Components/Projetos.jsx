import React from "react"
import * as S from "../Styles/projetosStyle"
import outubroRosa from "../assets/outubroRosa.png"
import link from "../assets/link.png"
import html5 from "../assets/html5.svg"
import javascript from "../assets/javascript.png"
import projetoVermelho from "../assets/projetoVermelho.png"
import logocss from "../assets/logocss.png"


function Projetos(){
    return(
        <section>
            <S.Section>
                 <S.Div>
                    <S.Img src={outubroRosa} alt="" />
                    <S.Figcaption>Outubro Rosa</S.Figcaption>
                    <S.P>Outubro Rosa foi uma atividade produzida em aula, durante o curso de desenvolvedor Front-End da academia VaiNaWeb.</S.P>
                    <S.H5>Tecnologias usadas no projeto</S.H5>
                    <figure>
                        <img src={html5} alt="logo_html5" />
                        <img src={javascript} alt="logo_javascript" />
                    </figure>
                    <S.Button> 
                        <S.A href="https://outubro-rosa-nine.vercel.app/" target="_blank">
                            <S.logoButton src={link} alt="logo_button" />
                             Visualizar
                        </S.A>
                    </S.Button>
                </S.Div>
                <S.Div>
                    <S.Img src={projetoVermelho} alt="projetoVermelho" />
                    <S.Figcaption>Projeto Vermelho</S.Figcaption>
                    <S.P>Projeto Vermelho foi desenvolvido como atividade durante o curso de desenvolvedor Front-End da academia VaiNaWeb.</S.P>
                    <S.H5>Tecnologias usadas no projeto</S.H5>
                    <figure>
                        <img src={html5} alt="logo_html5" />
                        <img src={logocss} alt="logo_css" />
                    </figure>
                    <S.Button>
                        <S.A href="https://projeto-vermelho.vercel.app/" target="_blank">
                            <S.logoButton src={link} alt="logo_button" />
                            Visualizar
                        </S.A>
                    </S.Button>
                </S.Div>
            </S.Section>
        </section>
    )
}
export default Projetos
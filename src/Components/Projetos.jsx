import React from "react"
import * as S from "../Styles/projetosStyle"
import outubroRosa from "../assets/outubroRosa.png"
import link from "../assets/link.png"
import html5 from "../assets/html5.svg"
import javascript from "../assets/javascript.png"


function Projetos(){
    return(
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
                        <S.logoButton src={link} alt="" />
                        Visualizar
                    </S.A>
                </S.Button>
            </S.Div>

        </S.Section>
    )
}
export default Projetos
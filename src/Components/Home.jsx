import React from "react"
import * as S from "../Styles/homeStyle"
import Github from "../assets/github.svg"
import Workdev from "../assets/workdev.svg"
import Linkedlin from "../assets/linkedlin.svg"



function Home(){
    return(
        <S.SectionHome>
        <div>
            <S.H1>Oi, eu sou o <S.Span>SrMaverick !</S.Span></S.H1>
            <S.H3>Desenvolvedor Front-End</S.H3>
            <S.Nav>
                <S.Button><S.Img src={Github} alt="Github" /><S.nameButton>Github</S.nameButton></S.Button>
                <S.Button><S.Img src={Linkedlin} alt="Linkedlin" /><S.nameButton>Linkedlin</S.nameButton></S.Button>
            </S.Nav>
        </div>
        <S.Workdev src={Workdev} alt="" />
        </S.SectionHome>
    )
}
export default Home
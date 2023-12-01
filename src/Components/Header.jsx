import React from "react"
import {Link} from "react-router-dom"
import * as S from "../Styles/headerStyle"

import Menu from "../assets/menu.svg"
import X from "../assets/x.svg"


function Header(){
    return(
        <S.StyleHeader>
            <S.Nav>
                    <S.H1>Portfolio</S.H1>
                <S.Ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre mim</Link></li>
                    <li><Link to="/qualificacoes">Qualificações</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                </S.Ul>
            </S.Nav>
        </S.StyleHeader>
    )
}
export default Header
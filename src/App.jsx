import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Projetos from "./Components/Projetos"
import Sobre from "./Components/Sobre"
import  {GlobalStyle} from "./Styles/global"


function App(){
  return(
    <>
    <GlobalStyle/>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
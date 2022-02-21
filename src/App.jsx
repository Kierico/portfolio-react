import GlobalStyle from "./globalStyles.js";
import React from "react";
import Header from "./Components/Header.jsx";
import TitleHeader from "./Components/TitleHeader.jsx";
import NavBar from "./Components/NavBar.jsx";
import NavLink from "./Components/NavLink.jsx";
import About from "./Sections/About/About.jsx";

function App() {
    return (
        <>
            <GlobalStyle />

            <Header>
              <TitleHeader>Portfólio</TitleHeader>
              <NavBar>
                <NavLink>Sobre mim</NavLink>
                <NavLink>Projetos</NavLink>
                <NavLink>Serviços</NavLink>
                <NavLink>Minhas skills</NavLink>
              </NavBar>
            </Header>

            <About/>
        </>
    );
}

export default App;
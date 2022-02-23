import GlobalStyle from "./globalStyles.js";
import React from "react";
import Header from "./Components/Header.jsx";
import TitleHeader from "./Components/TitleHeader.jsx";
import NavBar from "./Components/NavBar.jsx";
import NavLink from "./Components/NavLink.jsx";
import About from "./Sections/About/About.jsx";
import Projects from "./Sections/Projects/Projects.jsx";
import Services from "./Sections/Services/Services.jsx";
import Skills from "./Sections/Skills/Skills.jsx";

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

            <About />
            <Projects />
            <Services />
            <Skills />
        </>
    );
}

export default App;

import React from "react";
import ColorButton from "../../Components/ColorButton";
import BlackButton from "../../Components/BlackButton";
import AboutTitle, {
    AboutContainer,
    AboutImage,
    AboutSection,
    AboutText,
    TitleDiv,
    WrapperButton,
    WrapperTitle,
} from "./About.style";

const About = () => {
    return (
        <>
            <AboutSection>
                <TitleContainer />
            </AboutSection>
        </>
    );
};

export default About;

export const TitleContainer = (props) => {
    return (
        <>
            <AboutContainer>
                <WrapperTitle>
                    <TitleDiv>
                        <AboutTitle>Olá, eu sou o Saulo Veiga :)</AboutTitle>
                    </TitleDiv>
                    <AboutText>Desenvolvedor Front-End</AboutText>
                    <WrapperButton>
                        <ColorButton>Download CV</ColorButton>
                        <BlackButton>Entrar em contato</BlackButton>
                    </WrapperButton>
                </WrapperTitle>
                <AboutImage />
            </AboutContainer>
        </>
    );
};

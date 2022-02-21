import React from "react";
import ColorButton from "../../Components/ColorButton";
import BlackButton from "../../Components/BlackButton.jsx";
import HomeTitle, {
    AboutContainer,
    AboutImage,
    AboutSection,
    HomeText,
    TitleDiv,
    WrapperButton,
    WrapperTitle,
} from "./About.style.jsx";
import AboutTitle, {
    AboutText,
    AboutTextDiv,
    ContainerAboutText,
} from "./About.text.style";

import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import { SocialCard, ContainerSocial } from "./About.social.syle";

const About = () => {
    return (
        <>
            <AboutSection>
                <TitleContainer />
                <TextContainer/>
            </AboutSection>
        </>
    );
};

export default About;

export const TitleContainer = () => {
    return (
        <>
            <AboutContainer>
                <WrapperTitle>
                    <TitleDiv>
                        <HomeTitle>Olá, eu sou o Saulo Veiga :)</HomeTitle>
                    </TitleDiv>
                    <HomeText>Desenvolvedor Front-End</HomeText>
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

export const TextContainer = () => {
    return (
        <>
            <ContainerAboutText>
                <AboutTitle>Sobre mim</AboutTitle>
                <AboutTextDiv>
                    <AboutText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident
                    </AboutText>
                </AboutTextDiv>
                <ContainerSocial>
                    <SocialCard title="Linkedin" subtitle="/sauloveigr" src={Linkedin} />
                    <SocialCard title="Github" subtitle="/sauloveigr" src={Github} />
                    <SocialCard title="Contato" subtitle="(85) 9 9656-7235" src={Phone} />
                    <SocialCard title="Mail" subtitle="sauloveigr@hotmail.com" src={Mail} />
                </ContainerSocial>
            </ContainerAboutText>
        </>
    );
};

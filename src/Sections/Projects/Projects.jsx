import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import {
    CardDiv,
    ContainerCards,
    LinkCard,
    ProjectCardSubtitle,
    ProjectCardTitle,
    ProjectSection,
    WrapperCard,
} from "./Projects.style";

import Project1 from "../../assets/images/site-1.png";
import Project2 from "../../assets/images/site-2.png";
import Project3 from "../../assets/images/site-3.png";
import Project4 from "../../assets/images/site-4.png";

const Projects = () => {
    return (
        <>
            <ProjectSection>
                <SectionTitle>Projetos</SectionTitle>
                <ContainerCards>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/landing-page-react"
                    >
                        <ProjectCard
                            fontSize=".8rem"
                            title="Figma Land"
                            subtitle="React JS, styled-components e react-router-dom"
                            src={Project1}
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/studio-ghibli-react/"
                    >
                        <ProjectCard
                            title="Studio Ghibli"
                            fontSize="0.875rem"
                            subtitle="React JS e styled-components"
                            src={Project4}
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/landing-page-challenge/"
                    >
                        <ProjectCard
                            fontSize="0.875rem"
                            title="Rachi"
                            subtitle="React JS e styled-components"
                            src={Project2}
                        />
                    </LinkCard>
                    <LinkCard
                        target="_blank"
                        href="https://sauloveigr.github.io/nlw-origin/"
                    >
                        <ProjectCard
                            fontSize="0.875rem"
                            title="Beauty Salon"
                            subtitle="HTML, CSS e JavaScript"
                            src={Project3}
                        />
                    </LinkCard>
                </ContainerCards>
            </ProjectSection>
        </>
    );
};

export default Projects;

export const ProjectCard = (props) => {
    return (
        <>
            <WrapperCard>
                <CardDiv src={props.src} />
                <ProjectCardTitle>{props.title}</ProjectCardTitle>
                <ProjectCardSubtitle fontSize={props.fontSize}>
                    {props.subtitle}
                </ProjectCardSubtitle>
            </WrapperCard>
        </>
    );
};

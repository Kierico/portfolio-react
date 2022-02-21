import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import {
    CardDiv,
    ContainerCards,
    ProjectCardSubtitle,
    ProjectCardTitle,
    ProjectSection,
    WrapperCard,
} from "./Projects.style";

const Projects = () => {
    return (
        <>
            <ProjectSection>
                <SectionTitle>Projetos</SectionTitle>
                <ContainerCards>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
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
                <CardDiv />
                <ProjectCardTitle>Título do projeto</ProjectCardTitle>
                <ProjectCardSubtitle>
                    Tecnologias: HTML, CSS e JS.
                </ProjectCardSubtitle>
            </WrapperCard>
        </>
    );
};

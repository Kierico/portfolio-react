import styled from "styled-components";

export const ProjectSection = styled.section`
    max-width: 1440px;
    width: 70vw;
    margin: 0 auto;
    margin-top: 7.9375rem;
    margin-bottom: 7.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WrapperCard = styled.div`
    padding: 1.25rem 1.5625rem;
    background-color: var(--fourth-grey);
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 0px 2px var(--first-color);
        transition: 0.3s ease-in-out;
    }
`;

export const CardDiv = styled.div`
    width: 18.75rem;
    height: 8.125rem;
    background-color: var(--third-grey);
`;

export const ProjectCardTitle = styled.h2`
    font-size: 1.125rem;
    color: var(--light-color);
    font-weight: 500;
    margin-bottom: 0.375rem;
    margin-top: 1.4375rem;
`;

export const ProjectCardSubtitle = styled.p`
    font-size: 0.875rem;
    color: var(--first-grey);
    font-weight: 400;
`;

export const ContainerCards = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
    column-gap: 2.8125rem;
`;

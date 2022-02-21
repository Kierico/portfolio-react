import styled from "styled-components";

const AboutTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: var(--light-color);
    margin-bottom: 1.875rem;
`;

export const ContainerAboutText = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AboutTextDiv = styled.div`
    width: 46.5625rem;
    text-align: center;
    margin-bottom: 5rem;
`;

export const AboutText = styled.p`
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--first-grey);
`;



export default AboutTitle;
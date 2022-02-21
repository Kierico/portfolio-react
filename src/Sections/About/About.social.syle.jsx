import styled from "styled-components";
import React from "react";

export const SocialCard = (props) => {
    return (
        <>
            <SocialDiv>
                <CircleDiv>
                    <CircleIcon src={props.src} />
                </CircleDiv>
                <SocialTitle>{props.title}</SocialTitle>
                <SocialSubtitle>{props.subtitle}</SocialSubtitle>
            </SocialDiv>
        </>
    );
};

export const CircleDiv = styled.div`
    width: 3.875rem;
    height: 3.875rem;
    border-radius: 50%;
    background-color: var(--fourth-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.1875rem;
`;

export const CircleIcon = styled.img.attrs((props) => ({ src: props.src }))``;

export const ContainerSocial = styled.div`
    max-width: 1440px;
    width: 50rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SocialTitle = styled.h2`
    font-size: 1.125rem;
    color: var(--light-color);
    font-weight: 700;
    margin-bottom: 0.3125rem;
`;

export const SocialSubtitle = styled.p`
    font-size: 1rem;
    color: var(--first-grey);
    font-weight: 400;
`;

export const SocialDiv = styled.div`
    height: 8.75rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

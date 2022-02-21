import styled from "styled-components";
import React from "react";

export const Icon = (props) => {
    return (
        <>
            <CircleDiv>
                <CircleIcon src={props.src} />
            </CircleDiv>
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
`;

export const CircleIcon = styled.img.attrs((props) => ({ src: props.src }))``;

export const SocialDiv = styled.div`
    width: 50rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
import React from "react";
import { FooterComponent, FooterText, TextSpan } from "./Footer.style";

const Footer = () => {
    return (
        <>
            <FooterComponent>
                <FooterText>Design: <TextSpan>Iuri Silva</TextSpan></FooterText>
            </FooterComponent>
        </>
    )
};

export default Footer;
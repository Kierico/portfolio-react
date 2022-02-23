import styled from "styled-components";

const NavLink = styled.a`
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--light-color);
    cursor: pointer;
    /* transition: 1s ; */
    /* position: relative; */

    /* &:hover {
        ::after {
            position: absolute;
            content: "";
            width: 100%;
            top: 100%;
            left: 0;
            height: 2px;
            transition: 1s ;
            background-color: var(--first-color);
        }
    } */
`;

export default NavLink;

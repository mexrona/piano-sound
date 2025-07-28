import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {type ILinkNavItem} from "../../types/linkNav";

export const LinkNavItem = styled(NavLink).attrs<ILinkNavItem>((props) => ({
    $color: props.$color || "#9bcf58",
}))`
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-decoration: none;
    color: ${(props) => props.$color};
`;

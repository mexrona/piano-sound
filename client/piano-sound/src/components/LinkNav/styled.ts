import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {type ILinkNavItem} from "../../types/linkNav";

export const LinkNavItem = styled(NavLink).attrs<ILinkNavItem>((props) => ({
    $color: props.$color || "#9bcf58",
}))`
    display: block;
    text-decoration: none;
    color: ${(props) => props.$color};
`;

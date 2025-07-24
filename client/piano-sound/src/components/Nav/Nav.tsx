import {NavLink} from "react-router-dom";
import logo from "../../../public/logo.svg";
import * as SC from "./styled";
import {LinkNav} from "../LinkNav/LinkNav";

export const Nav: React.FC = () => (
    <SC.Nav>
        <NavLink to="/">
            <SC.Img src={logo} />
        </NavLink>
        <SC.Links>
            <LinkNav to="/">Home</LinkNav>
            <LinkNav to="/piano">Piano</LinkNav>
            <LinkNav to="/notes">Notes</LinkNav>
        </SC.Links>
    </SC.Nav>
);

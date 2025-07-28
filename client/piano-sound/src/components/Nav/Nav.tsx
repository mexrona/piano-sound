import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import logo from "../../../public/icons/logo.svg";
import * as SC from "./styled";
import {LinkNav} from "../LinkNav/LinkNav";

export const Nav: React.FC = () => {
    const location = useLocation();

    return (
        <SC.Nav>
            <NavLink to="/">
                <img className="icon" src={logo} alt="Piano" />
            </NavLink>
            <SC.Links>
                {location.pathname === "/notes" && (
                    <LinkNav to="/">Piano</LinkNav>
                )}
                {location.pathname !== "/notes" && (
                    <LinkNav to="/notes">Notes</LinkNav>
                )}
            </SC.Links>
        </SC.Nav>
    );
};

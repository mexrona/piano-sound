import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";
import logo from "../../../public/icons/logo.svg";
import * as SC from "./styled";
import {LinkNav} from "../LinkNav/LinkNav";

export const Nav: React.FC = () => {
    const location = useLocation();

    const locationPathname = location.pathname;
    const deleteFirstStep = locationPathname.replace("/notes/", "");
    const deleteSecondStep = deleteFirstStep.replace("/edit", "");
    const title = deleteSecondStep;

    return (
        <SC.Nav>
            <NavLink to="/">
                <img className="icon" src={logo} alt="Piano" />
            </NavLink>
            <SC.Links>
                {location.pathname === "/notes" && (
                    <LinkNav to="/">Piano</LinkNav>
                )}
                {!location.pathname.includes("edit") &&
                    location.pathname !== "/notes" && (
                        <LinkNav to="/notes">Notes</LinkNav>
                    )}
                {location.pathname.includes("edit") && (
                    <LinkNav to={`/notes/${title}`}>Back</LinkNav>
                )}
            </SC.Links>
        </SC.Nav>
    );
};

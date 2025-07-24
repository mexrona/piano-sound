import {type ILinkNav} from "../../types/linkNav";
import * as SC from "./styled";

export const LinkNav: React.FC<ILinkNav> = ({to, $color, children}) => (
    <SC.LinkNavItem to={to} $color={$color}>
        {children}
    </SC.LinkNavItem>
);

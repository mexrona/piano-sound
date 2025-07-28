import {useState} from "react";
import {type ILinkNav} from "../../types/linkNav";
import * as SC from "./styled";

export const LinkNav: React.FC<ILinkNav> = ({to, $color, children}) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <SC.LinkNavItem
            to={to}
            $color={isHover ? "#2fa7f3" : $color}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}>
            {children}
        </SC.LinkNavItem>
    );
};

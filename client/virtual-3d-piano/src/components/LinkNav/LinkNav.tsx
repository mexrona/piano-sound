import * as SC from "./styled";

interface ILinkNav {
    key?: string;
    to: string;
    $color?: string;
    children: any;
}

export const LinkNav: React.FC<ILinkNav> = ({to, $color, children}) => (
    <SC.LinkNavItem to={to} $color={$color}>
        {children}
    </SC.LinkNavItem>
);

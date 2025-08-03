import {type IButton} from "../../types/button";
import * as SC from "./styles";

export const Button: React.FC<IButton> = ({children, onClick, $color}) => (
    <SC.Button onClick={onClick} $color={$color}>
        {children}
    </SC.Button>
);

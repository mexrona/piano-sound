import {type ITitle} from "../../types/title";
import * as SC from "./styled";

export const Title: React.FC<ITitle> = ({children}) => (
    <SC.Title>{children}</SC.Title>
);

import {type IPanel} from "../../types/panel";
import * as SC from "./styles";

export const Panel: React.FC<IPanel> = ({defaultValue, id}) => (
    <SC.PanelWrapper
        id={id}
        defaultValue={defaultValue}
        disabled></SC.PanelWrapper>
);

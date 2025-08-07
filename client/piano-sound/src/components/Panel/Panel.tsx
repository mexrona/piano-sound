import {type IPanel} from "../../types/panel";
import * as SC from "./styles";

export const Panel: React.FC<IPanel> = ({
    defaultValue,
    id,
    disabled,
    onChange,
}) => (
    <SC.PanelWrapper
        id={id}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}></SC.PanelWrapper>
);

import {Settings} from "../Settings/Settings";
import {Record} from "../Record/Record";
import * as SC from "./styles";

export const Controller: React.FC = () => (
    <SC.ControllerWrapper>
        <Settings />
        <Record />
    </SC.ControllerWrapper>
);

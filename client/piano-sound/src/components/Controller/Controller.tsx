import type {IController} from "../../types/controller";
import * as SC from "./styles";
import {Settings} from "../Settings/Settings";
import {Record} from "../Record/Record";

export const Controller: React.FC<IController> = ({
    isKeysHide,
    isNotesHide,
}) => {
    return (
        <SC.ControllerWrapper>
            <Settings isKeysHide={isKeysHide} isNotesHide={isNotesHide} />
            <Record />
        </SC.ControllerWrapper>
    );
};

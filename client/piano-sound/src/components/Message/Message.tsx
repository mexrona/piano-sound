import {type IMessage} from "../../types/message";
import * as SC from "./styles";

export const Message: React.FC<IMessage> = ({messageText, message}) => (
    <SC.Message className={messageText === "" ? "" : "show"}>
        {message}
    </SC.Message>
);

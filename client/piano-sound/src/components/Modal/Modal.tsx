import {type IModal} from "../../types/modal";
import * as SC from "./styles";

export const Modal: React.FC<IModal> = ({children, modalIsShow}) =>
    modalIsShow ? (
        <SC.Show>
            <SC.ModalInner>{children}</SC.ModalInner>
        </SC.Show>
    ) : (
        <SC.Hide>
            <SC.ModalInner>{children}</SC.ModalInner>
        </SC.Hide>
    );

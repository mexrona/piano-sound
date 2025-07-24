import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as NoteActionCreators from "../store/action-creators/note";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(NoteActionCreators, dispatch);
};

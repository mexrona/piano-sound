import type {Dispatch} from "redux";
import {
    FETCH_NOTES,
    FETCH_NOTES_ERROR,
    FETCH_NOTES_SUCCESS,
} from "../../assets/consts";
import {type NotesAction} from "../../types/notes";
import axios from "axios";

export const fetchNotes = () => {
    return async (dispatch: Dispatch<NotesAction>) => {
        try {
            dispatch({type: FETCH_NOTES});
            const response = await axios.get(
                "http://localhost:3002/api/notes/list"
            );
            setTimeout(() => {
                dispatch({
                    type: FETCH_NOTES_SUCCESS,
                    payload: response.data.notes,
                });
            }, 10);
        } catch (e) {
            dispatch({
                type: FETCH_NOTES_ERROR,
                payload: "Произошла ошибка при загрузке нот",
            });
        }
    };
};

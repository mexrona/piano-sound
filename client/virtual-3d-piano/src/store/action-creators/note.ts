import type {Dispatch} from "redux";
import {
    FETCH_NOTES,
    FETCH_NOTES_ERROR,
    FETCH_NOTES_SUCCESS,
    type NotesAction,
} from "../../types/notes";
import axios from "axios";

export const fetchNotes = () => {
    return async (dispatch: Dispatch<NotesAction>) => {
        try {
            dispatch({type: FETCH_NOTES});
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setTimeout(() => {
                dispatch({type: FETCH_NOTES_SUCCESS, payload: response.data});
            }, 500);
        } catch (e) {
            dispatch({
                type: FETCH_NOTES_ERROR,
                payload: "Произошла ошибка при загрузке нот",
            });
        }
    };
};

import {
    FETCH_NOTES,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_ERROR,
} from "../../assets/consts";
import {type INotesState, type NotesAction} from "../../types/notes";

const initialState: INotesState = {
    notes: [],
    loading: false,
    error: null,
};

export const notesReducer = (
    state = initialState,
    action: NotesAction
): INotesState => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                notes: [],
                loading: true,
                error: null,
            };
        case FETCH_NOTES_SUCCESS:
            return {
                notes: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_NOTES_ERROR:
            return {
                notes: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

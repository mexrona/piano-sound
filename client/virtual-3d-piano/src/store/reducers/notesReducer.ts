import {
    FETCH_NOTES,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_ERROR,
    type NotesState,
    type NotesAction,
} from "../../types/notes";

const initialState: NotesState = {
    notes: [],
    loading: false,
    error: null,
};

export const notesReducer = (
    state = initialState,
    action: NotesAction
): NotesState => {
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

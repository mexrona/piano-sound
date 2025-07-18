export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_ERROR = "FETCH_NOTES_ERROR";

export interface NotesState {
    notes: any[];
    loading: boolean;
    error: null | string;
}

interface FetchNotesAction {
    type: typeof FETCH_NOTES;
}

interface FetchNotesSuccessAction {
    type: typeof FETCH_NOTES_SUCCESS;
    payload: any[];
}

interface FetchNotesErrorAction {
    type: typeof FETCH_NOTES_ERROR;
    payload: string;
}

export type NotesAction =
    | FetchNotesAction
    | FetchNotesSuccessAction
    | FetchNotesErrorAction;

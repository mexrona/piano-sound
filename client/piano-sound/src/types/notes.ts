import {
    FETCH_NOTES,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_ERROR,
} from "../assets/consts";

export interface INotesState {
    notes: any[];
    loading: boolean;
    error: null | string;
    payload?: any;
}

interface IFetchNotesAction {
    type: typeof FETCH_NOTES;
    payload: any;
}

interface IFetchNotesSuccessAction {
    type: typeof FETCH_NOTES_SUCCESS;
    payload: any[];
}

interface IFetchNotesErrorAction {
    type: typeof FETCH_NOTES_ERROR;
    payload: string;
}

export type NotesAction =
    | IFetchNotesAction
    | IFetchNotesSuccessAction
    | IFetchNotesErrorAction;

import {combineReducers} from "redux";
import {notesReducer} from "./notesReducer";

export const rootReduser = combineReducers({
    note: notesReducer,
});

export type rootState = ReturnType<typeof rootReduser>;

import {combineReducers} from "redux";
import {notesReducer} from "./notesReducer";
import keyboardReducer from "./keyboardReducer";
import volumeReducer from "./volumeReducer";

export const rootReducer = combineReducers({
    note: notesReducer,
    keyboard: keyboardReducer,
    volume: volumeReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

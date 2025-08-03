import {combineReducers} from "redux";
import {notesReducer} from "./notesReducer";
import keyboardReducer from "./keyboardReducer";
import volumeReducer from "./volumeReducer";
import recordReducer from "./recordReducer";

export const rootReducer = combineReducers({
    note: notesReducer,
    keyboard: keyboardReducer,
    volume: volumeReducer,
    record: recordReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

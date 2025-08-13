import {type IKeyboardState} from "../../types/keyboard";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isKeysHide: false,
    isNotesHide: false,
} satisfies IKeyboardState as IKeyboardState;

const keyboardSlice = createSlice({
    name: "keyboard",
    initialState,
    reducers: {
        showKeys(state, actions: PayloadAction<boolean>) {
            state.isKeysHide = !actions.payload;
        },
        showNotes(state, actions: PayloadAction<boolean>) {
            state.isNotesHide = !actions.payload;
        },
    },
});

export const {showKeys, showNotes} = keyboardSlice.actions;
export default keyboardSlice.reducer;

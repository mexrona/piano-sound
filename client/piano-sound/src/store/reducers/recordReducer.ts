import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {type IRecord} from "../../types/record";

const initialState = {
    isRecording: false,
    notes: "",
} satisfies IRecord as IRecord;

const recordSlice = createSlice({
    name: "record",
    initialState,
    reducers: {
        setIsRecording(state, actions: PayloadAction<boolean>) {
            state.isRecording = actions.payload;
        },
        recording(state, actions: PayloadAction<string>) {
            state.notes = state.notes + " " + actions.payload;
        },
        clean(state) {
            state.notes = "";
        },
    },
});

export const {setIsRecording, recording, clean} = recordSlice.actions;
export default recordSlice.reducer;

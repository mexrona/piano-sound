import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {type IRecord} from "../../types/record";

const initialState = {
    isRecording: false,
} satisfies IRecord as IRecord;

const recordSlice = createSlice({
    name: "record",
    initialState,
    reducers: {
        setIsRecording(state, actions: PayloadAction<boolean>) {
            state.isRecording = actions.payload;
        },
    },
});

export const {setIsRecording} = recordSlice.actions;
export default recordSlice.reducer;

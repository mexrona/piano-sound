import {type IVolume} from "../../types/volume";
import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: 0.5,
} satisfies IVolume as IVolume;

const volumeSlice = createSlice({
    name: "volume",
    initialState,
    reducers: {
        setVolume(state, actions: PayloadAction<number>) {
            state.value = actions.payload;
        },
    },
});

export const {setVolume} = volumeSlice.actions;
export default volumeSlice.reducer;

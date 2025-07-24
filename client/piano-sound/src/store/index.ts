import {configureStore} from "@reduxjs/toolkit";
import {rootReduser} from "./reducers";

export const store = configureStore({
    reducer: rootReduser,
});

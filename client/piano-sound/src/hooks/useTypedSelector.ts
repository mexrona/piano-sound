import type {TypedUseSelectorHook} from "react-redux";
import type {rootState} from "../store/reducers";
import {useSelector} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;

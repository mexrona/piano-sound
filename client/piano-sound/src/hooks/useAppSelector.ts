import type {TypedUseSelectorHook} from "react-redux";
import {useSelector} from "react-redux";
import type {rootState} from "../store/reducers";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

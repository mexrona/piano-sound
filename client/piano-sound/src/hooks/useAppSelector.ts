import type {TypedUseSelectorHook} from "react-redux";
import type {rootState} from "../store/reducers";
import {useSelector} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

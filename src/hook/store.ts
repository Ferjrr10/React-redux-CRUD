import { AppDispatch, RootState } from "../store";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const AppSelectorDispatch: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: TypedUseSelectorHook<AppDispatch> = useDispatch
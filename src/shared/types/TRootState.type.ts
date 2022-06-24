import {  EStores, EThemes } from "../enums";
import { TNewsState,TSearchNewsState } from "./TNewsState.type";

export type TRootState = {
    [EStores.theme]: EThemes,
    [EStores.news]: TNewsState,
    [EStores.searchNews]: TSearchNewsState,
};
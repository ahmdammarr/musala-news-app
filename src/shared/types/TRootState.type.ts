import {  EThemes } from "../enums";
import { TNewsState } from "./TNewsState.type";

export type TRootState = {
    theme: EThemes,
    news: TNewsState
};
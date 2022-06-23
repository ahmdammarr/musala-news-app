import { createSlice } from "@reduxjs/toolkit"
import { ENewsState, EReducers } from "shared/enums";
import { TNewsState, TRootState } from "shared/types";
import { useAppSelector } from "store/hooks";

const initialState: TNewsState = {
    news: [],
    status: ENewsState.loading,
};

export const newsSlice = createSlice({
  name: EReducers.news,
  initialState ,
  reducers: {
    setNews: (state, action)=> state = action.payload
  }
})



export const { setNews } = newsSlice.actions

const newsReducer = newsSlice.reducer;
const selectNews = (state:Pick<TRootState,'news'>) => state
const useNews = () => useAppSelector(selectNews);


export {
    newsReducer,
    useNews
}
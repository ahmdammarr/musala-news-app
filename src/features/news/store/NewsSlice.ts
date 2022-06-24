import { createSlice } from "@reduxjs/toolkit"
import { ENewsState, EStores } from "shared/enums";
import { TNewsState, TRootState } from "shared/types";
import { useAppSelector } from "store/hooks";

const initialState: TNewsState = {
    news: [],
    page:0,
    status: ENewsState.loading,
};

export const newsSlice = createSlice({
  name: EStores.news,
  initialState ,
  reducers: {
    setNews: (state, action)=> state = action.payload
  }
})



export const { setNews } = newsSlice.actions

const newsReducer = newsSlice.reducer;
const selectNews = (state:Pick<TRootState,EStores.news>) => state
const useNews = () => useAppSelector(selectNews);


export {
    newsReducer,
    useNews
}
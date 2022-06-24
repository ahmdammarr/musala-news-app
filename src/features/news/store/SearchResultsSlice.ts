import { createSlice } from "@reduxjs/toolkit"
import { ENewsState, EStores } from "shared/enums";
import { TRootState } from "shared/types";
import { TSearchNewsState } from "shared/types/TNewsState.type";
import { useAppSelector } from "store/hooks";

const initialState: TSearchNewsState = {
    searchNews: [],
    page:0,
    status: ENewsState.loading,
};

export const searchResultsSlice = createSlice({
  name: EStores.searchNews,
  initialState ,
  reducers: {
    setSearchNews: (state, action)=> state = action.payload
  }
})



export const { setSearchNews } = searchResultsSlice.actions

const searchNewsReducer = searchResultsSlice.reducer;
const selectSearchNews = (state:Pick<TRootState,EStores.searchNews>) => state
const useSearchNews = () => useAppSelector(selectSearchNews);


export {
    searchNewsReducer,
    useSearchNews
}
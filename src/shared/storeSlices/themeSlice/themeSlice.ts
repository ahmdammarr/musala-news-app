import { createSlice } from "@reduxjs/toolkit"
import {useColorScheme as _useColorScheme } from 'react-native';
import { EReducers } from "shared/enums";
import { TRootState } from "shared/types";
import { useAppSelector } from "store/hooks";

const defultMood = _useColorScheme()


export const themeSlice = createSlice({
  name: EReducers.theme,
  initialState: defultMood ,
  reducers: {
    setTheme: (state, action)=> state = action.payload
  }
})



export const { setTheme } = themeSlice.actions

const themeReducer = themeSlice.reducer;
const selectTheme = (state:Pick<TRootState,'theme'>) => state.theme
const useTheme = () => useAppSelector(selectTheme);


export {
    themeReducer,
    useTheme
}
import { createSlice } from "@reduxjs/toolkit"
import {useColorScheme } from 'react-native';
import { EStores } from "shared/enums";
import { TRootState } from "shared/types";
import { useAppSelector } from "store/hooks";

const defaultMood = useColorScheme()
export const themeSlice = createSlice({
  name: EStores.theme,
  initialState: defaultMood ,
  reducers: {
    setTheme: (state, action)=> state = action.payload
  }
})



export const { setTheme } = themeSlice.actions

const themeReducer = themeSlice.reducer;
const selectTheme = (state:Pick<TRootState,EStores.theme>) => state.theme
const useTheme = () => useAppSelector(selectTheme);


export {
    themeReducer,
    useTheme
}
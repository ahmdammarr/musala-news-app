import { useDispatch } from "react-redux"
import { EThemes } from "../enums"
import { setTheme, useTheme } from "../storeSlices/themeSlice/themeSlice"

export const useChangeTheme = ()=>{
const dispatch = useDispatch()
const theme = useTheme()
const isDarkTheme = theme === EThemes.dark
const selectedTheme = isDarkTheme? EThemes.light:EThemes.dark
const changeTheme = ()=>{

 

 dispatch(setTheme(selectedTheme))
}
return {
    changeTheme,
    isDarkTheme
}
}
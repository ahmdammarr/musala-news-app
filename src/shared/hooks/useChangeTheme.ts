import { useDispatch } from "react-redux"
import { useTheme, setTheme } from "shared/storeSlices/themeSlice"
import { EThemes } from "../enums"

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
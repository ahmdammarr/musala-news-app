import { useDispatch } from "react-redux";
import { useTheme, setTheme } from "shared/storeSlices/themeSlice";
import { setItem } from "utils/localStorage";
import { EThemes } from "shared/enums";
import { EStorageKeys } from "shared/enums/EstorageKeys.enum";

export const useChangeTheme = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDarkTheme = theme === EThemes.dark;
  const selectedTheme = isDarkTheme ? EThemes.light : EThemes.dark;
  const changeTheme = () => {
    setItem(EStorageKeys.theme, selectedTheme).then(() => {
      dispatch(setTheme(selectedTheme));
    })
  };
  return {
    changeTheme,
    isDarkTheme,
  };
};

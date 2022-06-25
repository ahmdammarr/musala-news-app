import i18n from 'i18n-js';
import { getItem, setItem } from "utils/localStorage";
import { EStorageKeys } from "shared/enums/EstorageKeys.enum";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "shared/storeSlices/themeSlice";
import { ELanguages } from "shared/enums";
import {I18nManager} from 'react-native'

export const useCashedResources = () => {
  const [isThemeLoading, setIsThemeLoading] = useState(true);
  const [isLanguageLoading, setIsLanguageLoading] = useState(true);
  const [IsSplashOn, setIsSplashOn] = useState(true)
  const dispatch = useDispatch();
  
  useEffect(() => {
  setTimeout(()=>setIsSplashOn(false),2000)
  }, [])
  

  //get lang
  getItem(EStorageKeys.language).then((language) => {
    if (language === undefined) {
      setItem(EStorageKeys.language, ELanguages.en);
      i18n.locale = ELanguages.en;
      I18nManager.forceRTL(false);
      setIsLanguageLoading(false)
    } else {
      i18n.locale = language.res as string
      setIsLanguageLoading(false)
    }
  });
//get theme
  getItem(EStorageKeys.theme).then(({ res }) => {
   if (res) dispatch(setTheme(res));
   setIsThemeLoading(false);
  });
  return {
    isLoading:isThemeLoading&&isLanguageLoading,
    IsSplashOn
  };
};

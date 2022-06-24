import i18n from "i18n-js";
import { I18nManager } from "react-native";
import { setItem } from "utils/localStorage";
import RNRestart from "react-native-restart";
import en from "./en";
import ar from "./ar";
import { EStorageKeys } from "shared/enums/EstorageKeys.enum";
import { ELanguages } from "shared/enums";

i18n.fallbacks = true;
i18n.translations = { en, ar };

export const changeLanguage = (language: ELanguages) => {
  
  if (i18n.currentLocale() === language) {
    return;
  } else {
    setItem(EStorageKeys.language, language);
  i18n.locale = language;
  I18nManager.forceRTL(language === ELanguages.ar);
    RNRestart.Restart();
  }
};

export const isRTL = I18nManager.isRTL;

export function translate(name: string, params = {}) {
  return i18n.t(name, params);
}

export const getCurrentLanguage = () => i18n.currentLocale();
export const isArabic = i18n.currentLocale() === ELanguages.ar
export default i18n;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { changeLanguage, getCurrentLanguage, translate } from "localization";
import { ELanguages } from "shared/enums";
import { CheckIcon } from "../Svgs";

export const LanguageSwitcher = () => {
  const languages = Object.values(ELanguages);
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>
        {translate("settings.languages.title")}
      </ThemedText>
      {languages.map((language) => {
        const onChnageLang = () => changeLanguage(language);
        const lang = {
          [ELanguages.ar]: translate("settings.languages.arabic"),
          [ELanguages.en]: translate("settings.languages.english"),
        };
        const isCurrentLanguge = getCurrentLanguage() === language;
        return (
          <TouchableOpacity
            style={styles.languageContainer}
            onPress={onChnageLang}
          >
            <ThemedText style={styles.langItem}>{lang[language]}</ThemedText>
            {isCurrentLanguge && <CheckIcon />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "flex-start" },
  title: { fontWeight: "600", marginBottom: 6 },
  langItem: { paddingVertical: 4 },
  languageContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }
});

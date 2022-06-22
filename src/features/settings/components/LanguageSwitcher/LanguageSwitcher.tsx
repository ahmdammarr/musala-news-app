import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { changeLanguage, translate } from "localization";
import { ELanguages } from "shared/enums";

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
        return (
          <TouchableOpacity onPress={onChnageLang}>
            <ThemedText style={styles.langItem}>{lang[language]}</ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{alignItems:'flex-start'},
  title: { fontWeight: "600", marginBottom: 6 },
  langItem: { paddingVertical: 4 },
});

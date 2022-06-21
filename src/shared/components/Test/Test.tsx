import { changeLanguage, translate } from "localization";
import React from "react";
import { StyleSheet, Switch } from "react-native";
import { ELanguages } from "shared/enums";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const Test = () => {
  const { changeTheme, isDarkTheme } = useChangeTheme();
  return (
    <ThemedView style={styles.container}>
      <ThemedText>{translate('theme.theme')}</ThemedText>
      <Switch
        value={isDarkTheme}
        onChange={() => changeTheme()}
        thumbColor={"greens"}
      />
        <ThemedText>{translate('languages.english')}</ThemedText>
      <Switch
        value={isDarkTheme}
        onChange={() => changeLanguage(ELanguages.en)}
        thumbColor={"greens"}
      />
         <ThemedText>{translate('languages.arabic')}</ThemedText>
      <Switch
        value={isDarkTheme}
        onChange={() => changeLanguage(ELanguages.ar)}
        thumbColor={"greens"}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Test;

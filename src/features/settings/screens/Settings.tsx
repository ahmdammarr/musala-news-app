import { translate } from "localization";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "shared/components/ThemedView";
import { TitleText } from "shared/components/TitleText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export const Settings = () => {
  const { top } = useSafeAreaInsets();
  return (
    <ThemedView style={[styles.container, { paddingTop: top }]}>
      <TitleText title={translate("settings.title")} style={styles.title} />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    alignSelf: "flex-start",
  },
});

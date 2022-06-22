import { changeLanguage, translate } from "localization";
import React from "react";
import { StyleSheet, Switch } from "react-native";
//import { ELanguages } from "shared/enums";
import { useChangeTheme } from "shared/hooks/useChangeTheme";
import { ThemedText } from "shared/components/ThemedText";
import { ThemedView } from "shared/components/ThemedView";
import { TitleText } from "shared/components/TitleText";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Settings = () => {
  const { changeTheme, isDarkTheme } = useChangeTheme();
  const { top } = useSafeAreaInsets();
  return (
    <ThemedView style={[styles.container, { top }]}>
      <TitleText title={translate("settings.title")} style={styles.title} />
      <ThemedText>{translate("settings.theme.theme")}</ThemedText>
      <Switch
        value={isDarkTheme}
        onChange={() => changeTheme()}
        thumbColor={"greens"}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 10,
  },
});

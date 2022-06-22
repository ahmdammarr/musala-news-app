import { StyleSheet, Text, View } from "react-native";
import { translate } from "localization";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { Switch } from "react-native-gesture-handler";
import { useChangeTheme } from "shared/hooks";

export const ThemeSwitcher = () => {
  const { changeTheme, isDarkTheme } = useChangeTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <ThemedText>{translate("settings.theme.theme")}</ThemedText>
      <Switch
        value={isDarkTheme}
        onChange={() => changeTheme()}
        thumbColor={"greens"}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

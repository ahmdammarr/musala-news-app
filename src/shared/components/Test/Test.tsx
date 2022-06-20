import React from "react";
import { StyleSheet, Switch } from "react-native";
import { useChangeTheme } from "../../hooks/useChangeTheme";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const Test = () => {
  const { changeTheme, isDarkTheme } = useChangeTheme();
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Hello</ThemedText>
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
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Test;

import { StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { ThemedView } from "shared/components/ThemedView";
import { AnimatedView } from "shared/components/AnimatedView";
import { animations } from "assets/animations";

export const News = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>News</ThemedText>
      <AnimatedView 
      containerStyle={{width:120, height:120}}
      animation={animations.loadingAnimation} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

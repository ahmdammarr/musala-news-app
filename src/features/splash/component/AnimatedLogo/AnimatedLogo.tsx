import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnimatedView } from "shared/components/AnimatedView";
import { animations } from "assets/animations";
import { scaleHeight, scaleWidth } from "utils/scaling/scaling";

export const AnimatedLogo = () => {
  return (
    <AnimatedView
      containerStyle={styles.container}
      style={styles.animation}
      animation={animations.animatedLogo}
    />
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "transparent" },
  animation: { height: scaleHeight(350), width: scaleWidth(80) },
});

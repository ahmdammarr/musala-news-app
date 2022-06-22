import { StyleSheet, Text, View, TextProps } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { TTitleText } from "shared/types";

export const TitleText = ({ title, style }: TTitleText & TextProps) => {
  return <ThemedText style={[style,styles.text]}>{title}</ThemedText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

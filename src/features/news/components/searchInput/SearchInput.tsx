import {
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";
import React from "react";
import { scale, scaleHeight, scaleWidth } from "utils/scaling/scaling";
import { colors } from "assets/colors";
import { TThemedProps } from "shared/types";
import { useThemed } from "shared/hooks";

export const SearchInput = ({
  light,
  dark,
  ...props
}: TThemedProps & TextInputProps) => {
  const color = useThemed({ light, dark }, "text");
  return (
    <TextInput
      style={[styles.input, { color }]}
      placeholder="Search News"
      placeholderTextColor={colors.light.secondaryBackGround}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: scaleHeight(50),
    width: scaleWidth(350),
    borderColor: colors.light.secondaryBackGround,
    borderWidth: scaleWidth(0.5),
    borderRadius: scale(10),
    paddingHorizontal: scaleWidth(10),
  },
});

import { Text, TextProps } from "react-native";
import React from "react";
import { useThemed } from "../../hooks/useThemed";
import { TThemedProps } from "../../types/TThemedProps.type";

type TThemedText = TThemedProps & TextProps;
const Themed = (props: TThemedText) => {
  const { style, light, dark, ...otherProps } = props;
  const color = useThemed({ light, dark }, "text");

  return <Text style={[{ color }, style]} {...otherProps} />;
};

export default Themed;

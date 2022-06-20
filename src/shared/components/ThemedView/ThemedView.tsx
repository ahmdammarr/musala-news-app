import { View, ViewProps } from "react-native";
import React from "react";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";

type TThemedView = TThemedProps & ViewProps;
const Themed = (props: TThemedView) => {
  const { style, light, dark, ...otherProps } = props;
  const backgroundColor = useThemed({ light, dark }, "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};

export default Themed;

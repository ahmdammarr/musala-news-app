import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";

export const CheckIcon = (props: TThemedProps) => {
  const fillColor = useThemed({ light: props.light, dark: props.dark }, "text");
  return (
    <View style={styles.container}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMinYMin meet"
        fill="none"
        {...props}
      >
        <Path
          d="M5.132 14.919a2.773 2.773 0 0 0-4.715 2.718c.117.345.3.664.54.938l9.71 11.104a2.772 2.772 0 0 0 4.11.078l23.58-24.98A2.776 2.776 0 0 0 36.26.097a2.773 2.773 0 0 0-1.937.868L12.838 23.734l-7.706-8.815Z"
          fill={fillColor}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

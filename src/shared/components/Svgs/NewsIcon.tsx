import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useThemed } from "shared/hooks";
import { TTabIcons } from "shared/types";

export const NewsIcon = (props: TTabIcons) => {
  const fillColor = useThemed(
    { light: props.light, dark: props.dark },
    "tabIcon"
  );

  const focousedFill = props.isFocused ? "#284b63" : "transparent";
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
          d="M11.281 58.324c-2.97 0-5.82-1.18-7.92-3.282a11.211 11.211 0 0 1-3.28-7.925V19.789a7.796 7.796 0 0 1 4.807-7.202 7.782 7.782 0 0 1 2.982-.593h4.162V8.257c.002-2.18.869-4.27 2.41-5.81A8.224 8.224 0 0 1 20.248.034H50.12a8.224 8.224 0 0 1 5.806 2.412 8.235 8.235 0 0 1 2.408 5.81v29.89a8.231 8.231 0 0 1-2.409 5.808 8.22 8.22 0 0 1-5.805 2.41h-3.738v4.165a7.794 7.794 0 0 1-4.808 7.202 7.784 7.784 0 0 1-2.982.592H11.281ZM4.559 19.79v27.328a6.731 6.731 0 0 0 6.722 6.725h27.311a3.306 3.306 0 0 0 3.308-3.31v-4.167H20.249a8.22 8.22 0 0 1-5.807-2.409 8.231 8.231 0 0 1-2.41-5.81v-21.67H7.87a3.307 3.307 0 0 0-3.31 3.313ZM16.511 8.26v29.89a3.742 3.742 0 0 0 3.738 3.737H50.12a3.74 3.74 0 0 0 3.735-3.737V8.257a3.745 3.745 0 0 0-3.735-3.74H20.25a3.74 3.74 0 0 0-3.738 3.74v.003Zm11.2 23.16a2.239 2.239 0 0 1-2.239-2.24 2.242 2.242 0 0 1 2.24-2.241h14.936a2.239 2.239 0 0 1 2.239 2.24 2.241 2.241 0 0 1-2.24 2.242H27.712Zm0-11.955a2.242 2.242 0 0 1-2.157-2.243 2.245 2.245 0 0 1 2.158-2.242h14.936a2.243 2.243 0 1 1 0 4.485H27.712Z"
          fill={props.isFocused ? focousedFill : fillColor}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

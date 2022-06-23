import LottieView from "lottie-react-native";
import * as React from "react";
import {  StyleSheet, View } from "react-native";
import { TAnimatedView } from "shared/types";

export const AnimatedView = (props: TAnimatedView) => {
  const { style = {}, containerStyle = {} } = props;
  return (
    <View style={[styles.viewStyle, containerStyle]}>
      <LottieView
        source={props.animation}
        style={[styles.lottie, style]}
        autoPlay
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
  },
  lottie: {
    height: "auto",
  },
});

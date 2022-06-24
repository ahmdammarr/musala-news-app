import { StyleProp, ViewStyle } from "react-native";
import { AnimatedLottieViewProps } from "lottie-react-native";

export type TAnimatedView = {
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    animation: AnimatedLottieViewProps["source"];
  };
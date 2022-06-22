import { SvgProps } from "react-native-svg";
import { TThemedProps } from "./TThemedProps.type";
export type TTabIcons = SvgProps &
  TThemedProps & {
    isFocused: boolean;
  };

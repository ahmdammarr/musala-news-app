import { colors } from "assets/colors";
import { EThemes } from "shared/enums";
import { useTheme } from "shared/storeSlices/themeSlice";

export const useThemed = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof colors.light & keyof typeof colors.dark
) => {
  const theme = useTheme();
  const isDarkTheme = theme === EThemes.dark;

  const selectedTheme = isDarkTheme ? EThemes.dark : EThemes.light;
  const colorFromProps = props[selectedTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors[selectedTheme][colorName];
  }
};

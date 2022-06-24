import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { scale, scaleHeight, scaleWidth } from "utils/scaling/scaling";
import { colors } from "assets/colors";
import { TThemedProps } from "shared/types";
import { useThemed } from "shared/hooks";
import { isArabic, translate } from "localization";

export const SearchInput = ({
  light,
  dark,
  ...props
}: TThemedProps & TextInputProps) => {
  const color = useThemed({ light, dark }, "text");
  return (
    <View>
    <TextInput
      style={[styles.input, { color }]}
      placeholder={translate('news.search')}
      placeholderTextColor={colors.light.secondaryBackGround}
      {...props}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: isArabic? 'right':'left',
    height: scaleHeight(50),
    width: scaleWidth(350),
    borderColor: colors.light.secondaryBackGround,
    borderWidth: scaleWidth(0.5),
    borderRadius: scale(10),
    paddingHorizontal: scaleWidth(10),
  },
});

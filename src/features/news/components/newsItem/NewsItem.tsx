import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";
import { TNews } from "features/news/types";
import {
  scale,
  scaleFontSize,
  scaleHeight,
  scaleWidth,
} from "utils/scaling/scaling";
import { images } from "assets/images";

const Radius = scale(10);
const width = scaleWidth(360);
const height = scaleHeight(380);

export const NewsItem = (props: TNews & TThemedProps) => {
  const { description, image, title, dark, light } = props;
  const themedColor = useThemed({ light, dark }, "secondaryBackGround");
   const imagesSource = image?{ uri: image }: images.defaultImage
  return (
    <TouchableOpacity
      onPress={() => console.log("hello")}
      style={[styles.container, { borderColor: themedColor }]}
    >
      <Image
        source={imagesSource}
        resizeMode="cover"
        style={[styles.cover, { backgroundColor: themedColor }]}
      />
      <View style={styles.contentContainer}>
        <ThemedText numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.description}
        >
          {description}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: scaleWidth(2),
    borderRadius: Radius,
    width,
    height,
    alignItems: "flex-start",
    marginBottom: scaleHeight(10),
  },
  cover: {
    width,
    height: height / 1.4,
    borderTopRightRadius: Radius,
    borderTopLeftRadius: Radius,
  },
  contentContainer: { alignItems: "flex-start", padding: scale(10) },
  title: { fontSize: scaleFontSize(15), fontWeight: "600" },
  description: { fontSize: scaleFontSize(12), marginTop: scaleHeight(5) },
});

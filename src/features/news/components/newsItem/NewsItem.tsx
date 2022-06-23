import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";
import { TNewsItem } from "features/news/types";

const Radius = 10;
export const NewsItem = (props: TNewsItem & TThemedProps) => {
  const { description, image, title, dark, light } = props;
  const themedColor = useThemed({ light, dark }, "secondaryBackGround");
  return (
    <TouchableOpacity style={[styles.container, { borderColor: themedColor }]}>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={[styles.cover, { backgroundColor: themedColor }]}
      />
      <View style={styles.contentContainer}>
        <ThemedText numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText
          numberOfLines={2}
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
    borderWidth: 2,
    borderRadius: Radius,
    width: "100%",
    height: "40%",
    alignItems: "flex-start",
    marginBottom:4
  },
  cover: {
    width: "100%",
    height: "70%",
    borderTopRightRadius: Radius,
    borderTopLeftRadius: Radius,
  },
  contentContainer: { alignItems: "flex-start", padding: 10 },
  title: { fontSize: 15, fontWeight: "600" },
  description: { fontSize: 12, marginTop: 5 },
});

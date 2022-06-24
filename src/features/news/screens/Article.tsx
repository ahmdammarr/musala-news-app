import { StyleSheet, Text, View, Image, Linking } from "react-native";
import React from "react";
import { ThemedView } from "shared/components/ThemedView";
import { ThemedText } from "shared/components/ThemedText";
import { INewsParams } from "../types";
import { images } from "assets/images";
import {
  scale,
  scaleFontSize,
  scaleHeight,
  SCREEN_WIDTH,
} from "utils/scaling/scaling";
import { useThemed } from "shared/hooks";
import { TThemedProps } from "shared/types";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { format, parseISO } from "date-fns";
import { translate} from "localization";

const height = scaleHeight(380);
export const Article = (props: TThemedProps) => {
  const { dark, light } = props;
  const { params } = useRoute<INewsParams["routeParams"]>();

  const imagesSource = params?.image
    ? { uri: params?.image }
    : images.defaultImage;
  const themedColor = useThemed({ light, dark }, "secondaryBackGround");
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={imagesSource}
            resizeMode="cover"
            style={[styles.cover, { backgroundColor: themedColor }]}
          />
          <View style={styles.contentContainer}>
            <ThemedText style={styles.title}>{params?.title || ""}</ThemedText>
            <ThemedText style={styles.small}>
              {params?.published_at
                ? format(parseISO(params?.published_at), "dd/MM/yyyy")
                : ""}
              {"   "} {params?.author || ""}
            </ThemedText>
            <ThemedText style={styles.description}>
              {params?.description || ""}
            </ThemedText>
            {params?.url && (
              <ThemedText style={styles.link}>
                {translate('news.fullArticle')}:{"  "}
                <Text
                  style={styles.blue}
                  onPress={() => Linking.openURL(params?.url)}
                >
                {translate('news.clickHere')}
                </Text>
              </ThemedText>
            )}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems:'flex-start'
  },
  cover: {
    width: SCREEN_WIDTH,
    height: height / 1.2,
  },
  contentContainer: {
    padding: scale(15),
    alignItems:'flex-start'
  },
  title: { fontSize: scaleFontSize(18), fontWeight: "600", textAlign:'left' },
  link: {
    fontSize: scaleFontSize(14),
    fontWeight: "600",
    marginTop: scaleHeight(20),
  },
  description: { fontSize: scaleFontSize(14), marginTop: scaleHeight(20),textAlign:'left'},
  small: {
    fontSize: scaleFontSize(12),
    marginTop: scaleHeight(10),
    opacity: 0.5,
  },
  blue:{ color: "blue" }
});

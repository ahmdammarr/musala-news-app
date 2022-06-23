import { StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "shared/components/ThemedText";
import { ThemedView } from "shared/components/ThemedView";
import { AnimatedView } from "shared/components/AnimatedView";
import { animations } from "assets/animations";
import { useGetNews } from "../hooks/useGetNews";
import { NewsItem } from "../components/newsItem";

export const News = () => {
  const { data } = useGetNews();
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <NewsItem />
      </ThemedView>
      {/* <AnimatedView 
      containerStyle={{width:120, height:120}}
      animation={animations.loadingAnimation} /> */}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

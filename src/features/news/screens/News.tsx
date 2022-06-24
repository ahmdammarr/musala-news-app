import { StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "shared/components/ThemedView";
import { AnimatedView } from "shared/components/AnimatedView";
import { animations } from "assets/animations";
import { useGetNews } from "../hooks/useGetNews";
import { NewList } from "../components/newList";
import { ENewsState } from "shared/enums";

export const News = () => {
  const { data } = useGetNews();
  const screenContent = {
    [ENewsState.loading]: (
      <AnimatedView
        containerStyle={{ width: 120, height: 120 }}
        animation={animations.loadingAnimation}
      />
    ),
    [ENewsState.failed]: (
      <AnimatedView
        containerStyle={{ width: 120, height: 120 }}
        animation={animations.loadingAnimation}
      />
    ),
    [ENewsState.done]: <NewList data={data.news.news} />,
  };

  return (
    <ThemedView style={styles.container}>
      {screenContent[data.news.status]}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
     alignItems: "center",
  },
});

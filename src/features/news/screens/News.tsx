import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "shared/components/ThemedView";
import { AnimatedView } from "shared/components/AnimatedView";
import { animations } from "assets/animations";
import { useGetNews } from "../hooks/useGetNews";
import { NewList } from "../components/newList";
import { ENewsState } from "shared/enums";
import { Loader } from "shared/components/Loader";
import { scaleHeight, scaleWidth } from "utils/scaling/scaling";

export const News = () => {
  const [offSetPage, setOffSetPage] = useState(0);
  const { data } = useGetNews(offSetPage);
  const screenContent = {
    [ENewsState.loading]: <Loader style={styles.loader}/>,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader:{
    height: scaleHeight(125),
    width: scaleWidth(150)
  }
});

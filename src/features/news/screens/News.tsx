import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "shared/components/ThemedView";
import { useGetNews } from "../hooks/useGetNews";
import { NewList } from "../components/newList";
import { ENewsState } from "shared/enums";
import { Loader } from "shared/components/Loader";
import { scaleHeight, scaleWidth } from "utils/scaling/scaling";
import { ErrorAnimated } from "shared/components/ErrorAnimated";
import { SearchInput } from "../components/searchInput/SearchInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const News = () => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [isLoadingMore, setisLoadingMore] = useState(false);
  const {top} = useSafeAreaInsets()
  // const { data, fetchMoreNews } = useGetNews();
  // const onLoadMore = () => {
  //   console.log('offSet', offSetPage)
  //   setisLoadingMore(true)
  //   setOffSetPage(offSetPage + 1);
  //   fetchMoreNews(offSetPage).then(()=> setisLoadingMore(false))
  // };

  const screenContent = {
     [ENewsState.loading]: <Loader style={styles.status} />,
    // [ENewsState.failed]: <ErrorAnimated style={styles.status} />,
    // [ENewsState.done]: (
    //   <NewList
    //     data={data.news.news}
    //     onLoadMore={onLoadMore}
    //     refreshing={isLoadingMore}
    //   />
    // ),
  };

  return (
    <ThemedView style={[styles.container, {paddingTop:top}]}>
      <SearchInput />
      {screenContent[ENewsState.loading]}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  status: {
    height: scaleHeight(125),
    width: scaleWidth(150),
  },
});

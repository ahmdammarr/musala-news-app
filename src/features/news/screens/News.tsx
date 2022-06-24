import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { ThemedView } from "shared/components/ThemedView";
import { useGetNews } from "../hooks/useGetNews";
import { NewList } from "../components/newList";
import { ENewsState } from "shared/enums";
import { Loader } from "shared/components/Loader";
import { scaleHeight, scaleWidth } from "utils/scaling/scaling";
import { ErrorAnimated } from "shared/components/ErrorAnimated";
import { SearchInput } from "../components/searchInput/SearchInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetSearchNews } from "../hooks/useGetSearchNews";

export const News = () => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [offSetPageSearch, setOffSetPageSearch] = useState(0);
  const [isLoadingMore, setisLoadingMore] = useState(false);
  const [isLoadingMoreSearch, setisLoadingMoreSearch] = useState(false);
  const { top } = useSafeAreaInsets();
  const [searchInput, setSearchInput] = useState("");
  const { data, fetchMoreNews, getNews } = useGetNews();
  const { searchData, getSearchNews, fetchMoreSearchNews, setSearchLoading } =
    useGetSearchNews();
  const onLoadMore = () => {
    setisLoadingMore(true);
    setOffSetPage(offSetPage + 1);
    fetchMoreNews(offSetPage).then(() => setisLoadingMore(false));
  };

  const onLoadMoreSearch = () => {
    console.log("offSet", offSetPageSearch);
    setisLoadingMoreSearch(true);
    setOffSetPageSearch(offSetPageSearch + 1);
    fetchMoreSearchNews(offSetPageSearch, searchInput).then(() =>
      setisLoadingMoreSearch(false)
    );
  };

  useEffect(() => {
    if (searchInput) {
      //   setSearchLoading()
      console.log("hello", searchInput.length, searchData?.searchNews?.status);
      getSearchNews(searchInput);
      //  getSearchNews(searchInput)
    } else getNews();
  }, [searchInput]);

  const newsContent = {
    [ENewsState.loading]: <Loader style={styles.status} />,
    [ENewsState.failed]: <ErrorAnimated style={styles.status} />,
    [ENewsState.done]: (
      <NewList
        data={data.news.news}
        onLoadMore={onLoadMore}
        refreshing={isLoadingMore}
      />
    ),
  };
  const searchContent = {
    [ENewsState.loading]: <Loader style={styles.status} />,
    [ENewsState.failed]: <ErrorAnimated style={styles.status} />,
    [ENewsState.done]: (
      <NewList
        data={searchData?.searchNews?.searchNews}
        onLoadMore={onLoadMoreSearch}
        refreshing={isLoadingMoreSearch}
      />
    ),
  };
  const onSearchChangeValue = (text: string) => setSearchInput(text);
  return (
    <ThemedView style={[styles.container, { paddingTop: top }]}>
      <SearchInput onChangeText={onSearchChangeValue} />
      {searchInput.length
        ? searchContent[searchData?.searchNews?.status]
        : newsContent[data?.news?.status]}
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

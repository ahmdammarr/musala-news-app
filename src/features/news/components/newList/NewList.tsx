import { FlatList, View, RefreshControl } from "react-native";
import React from "react";
import { NewsItem } from "../newsItem";
import { TNews } from "features/news/types";
import { Loader } from "shared/components/Loader";

export const NewList = ({
  data,
  refreshing,
  onLoadMore,
}: {
  data: TNews[];
  refreshing: boolean;
  onLoadMore: () => void;
}) => {
  return (
    <FlatList
      data={data}
      refreshing={refreshing}
      onRefresh={onLoadMore}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onLoadMore}
          tintColor="transparent"
        />
      }
      renderItem={({ item }) => <NewsItem key={item.title} {...item} />}
      ListHeaderComponent={() =>
        refreshing ? (
          <View style={{ alignItems: "center" }}>
            <Loader style={{ width: 50, height: 50 }} />
          </View>
        ) : null
      }
    />
  );
};

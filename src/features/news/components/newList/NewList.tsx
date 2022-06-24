import { FlatList } from "react-native";
import React from "react";
import { NewsItem } from "../newsItem";
import { TNews } from "features/news/types";

export const NewList = ({ data }: { data: TNews[] }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsItem key={item.title} {...item} />}
      keyExtractor={({ title }) => title}
    />
  );
};

import { getAllNewsApi } from "api/getAllNews/getAllNewsApi";
import { useEffect } from "react";
import { ENewsState } from "shared/enums";
import { useAppDispatch } from "store/hooks";
import { setNews, useNews } from "../store/NewsSlice";

export const useGetNews = (page:number) => {
  const dispatch = useAppDispatch();
  const data = useNews();

  const getNews = async () => {
    const { error, news } = await getAllNewsApi(page);
    if (error)
      dispatch(
        setNews({
          news: [],
          status: ENewsState.failed,
        })
      );
    if (news)
 {
  console.log('news',news)
  dispatch(
        setNews({
          news: [...news, news],
          status: ENewsState.done,
        })
      );}
  };
  useEffect(() => {
    getNews();
  }, []);
  return {
    data,
    getNews,
  };
};

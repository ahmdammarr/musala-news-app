import { getNewsApi } from "api/getNews";
import { useEffect } from "react";
import { ENewsState } from "shared/enums";
import { useAppDispatch } from "store/hooks";
import { setNews, useNews } from "../store/NewsSlice";

export const useGetNews = () => {
  const dispatch = useAppDispatch();
  const data = useNews();

  const getNews = async () => {
    const { error, news } = await getNewsApi(0);
    if (error)
      dispatch(
        setNews({
          news: [],
          status: ENewsState.failed,
        })
      );
    if (news)
 {
  dispatch(
        setNews({
          news,
          status: ENewsState.done,
        })
      );}
  };

  const fetchMoreNews = async (page:number) => {
    const { error, news } = await getNewsApi(page);
    if (error)
      dispatch(
        setNews({
          news: [],
          page,
          status: ENewsState.failed,
        })
      );
    if (news)
 {

  dispatch(
        setNews({
          news:[...news,...data?.news?.news],
          page,
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
    fetchMoreNews
  };
};

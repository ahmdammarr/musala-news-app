import { getSearchNewsApi } from "api/getNews/getNewsApi";
import { ENewsState } from "shared/enums";
import { useAppDispatch } from "store/hooks";
import { setSearchNews, useSearchNews } from "../store/SearchResultsSlice";

export const useGetSearchNews = () => {
  const dispatch = useAppDispatch();
  const searchData = useSearchNews();

  const getSearchNews = async (keyword: string) => {
    const { error, searchNews } = await getSearchNewsApi(0, keyword);

    if (error)
      dispatch(
        setSearchNews({
          news: [],
          status: ENewsState.failed,
        })
      );

    if (searchNews) {
      console.log("searchNews", searchNews);
      dispatch(
        setSearchNews({
          searchNews,
          status: ENewsState.done,
        })
      );
    }
  };

  const fetchMoreSearchNews = async (page: number, keyword: string) => {
    const { error, searchNews } = await getSearchNewsApi(page, keyword);

    if (error)
      dispatch(
        setSearchNews({
          searchNews: [],
          page,
          status: ENewsState.failed,
        })
      );

    if (searchNews)
      dispatch(
        setSearchNews({
          searchNews: [...searchNews, ...searchData?.searchNews?.searchNews],
          page,
          status: ENewsState.done,
        })
      );
  };

  return {
    searchData,
    getSearchNews,
    fetchMoreSearchNews
  };
};

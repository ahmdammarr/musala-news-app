import {configureStore} from '@reduxjs/toolkit';
import { newsReducer } from 'features/news/store/NewsSlice';
import { searchNewsReducer } from 'features/news/store/SearchResultsSlice';

import { EStores } from '../shared/enums';
import { themeReducer } from '../shared/storeSlices/themeSlice/themeSlice';


export const store = configureStore({
  reducer: {
    [EStores.theme]: themeReducer,
    [EStores.news]:  newsReducer,
    [EStores.searchNews]:  searchNewsReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import {configureStore} from '@reduxjs/toolkit';
import { newsReducer } from 'features/news/store/NewsSlice';

import { EReducers } from '../shared/enums';
import { themeReducer } from '../shared/storeSlices/themeSlice/themeSlice';


export const store = configureStore({
  reducer: {
    [EReducers.theme]: themeReducer,
    [EReducers.news]:  newsReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

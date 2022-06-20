import {configureStore} from '@reduxjs/toolkit';

import { EReducers } from '../shared/enums';
import { themeReducer } from '../shared/storeSlices/themeSlice/themeSlice';


export const store = configureStore({
  reducer: {
    [EReducers.theme]: themeReducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

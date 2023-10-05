import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware:
    process.env.NODE_ENV === 'development'
      ? (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          }).concat(logger)
      : undefined,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

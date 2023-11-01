import { combineReducers } from '@reduxjs/toolkit';
import masterReducer from './masterSlice';
import basketReducer from './basketSlice';

export const rootReducer = combineReducers({
  masterReducer,
  basketReducer,
});

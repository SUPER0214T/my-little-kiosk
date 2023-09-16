import { combineReducers } from '@reduxjs/toolkit';
import masterReducer from './masterSlice';

export const rootReducer = combineReducers({
  masterReducer,
});

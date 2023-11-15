import { combineReducers } from '@reduxjs/toolkit';
import masterReducer from './masterSlice';
import basketReducer from './basketSlice';
import paymentReducer from './paymentSlice';

export const rootReducer = combineReducers({
  masterReducer,
  basketReducer,
  paymentReducer,
});

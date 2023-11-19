import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentType } from '../types/payment';

type InitialState = {
  [key in PaymentType]: {
    totalPaymentAmount: number;
  };
};

const initialState: InitialState = {
  credit: {
    totalPaymentAmount: 0,
  },
  naver: {
    totalPaymentAmount: 0,
  },
  kakao: {
    totalPaymentAmount: 0,
  },
};

const paymentSlice = createSlice({
  name: 'paymentSlice',
  initialState,
  reducers: {
    resetPaymentInfo: (state) => {
      state = initialState;

      return state;
    },
    updatePaymentInfo: (state, action: PayloadAction<{ paymentType: PaymentType; paymentAmount: number }>) => {
      state[action.payload.paymentType].totalPaymentAmount = action.payload.paymentAmount;

      return state;
    },
  },
});

export const { resetPaymentInfo, updatePaymentInfo } = paymentSlice.actions;
export default paymentSlice.reducer;

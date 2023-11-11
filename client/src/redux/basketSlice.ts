import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItem } from '../types/basket';

export interface InitialState {
  basketList: BasketItem[];
}

const initialState: InitialState = {
  basketList: [],
};

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    addBasketItem: (state, action: PayloadAction<string>) => {
      const newBasketItem: BasketItem = {
        itemCd: action.payload,
        qty: 1,
      };
      state.basketList.push(newBasketItem);

      return state;
    },
    resetBasketList: (state) => {
      state.basketList = [];

      return state;
    },
    increaseBasketItemQty: (state, action: PayloadAction<{ index: number }>) => {
      state.basketList[action.payload.index].qty++;

      return state;
    },
    decreaseBasketItemQty: (state, action: PayloadAction<{ index: number }>) => {
      state.basketList[action.payload.index].qty--;

      return state;
    },
  },
});

export const { addBasketItem, resetBasketList, increaseBasketItemQty, decreaseBasketItemQty } = basketSlice.actions;
export default basketSlice.reducer;

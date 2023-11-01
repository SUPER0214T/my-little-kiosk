import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BasketItem = { itemCd: string; qty: number };

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
  },
});

export const { addBasketItem, resetBasketList } = basketSlice.actions;
export default basketSlice.reducer;

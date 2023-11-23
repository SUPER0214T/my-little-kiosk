import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ItemData } from '../types/master';

interface InitialState {
  itemData: ItemData[];
}

const initialState: InitialState = {
  itemData: [],
};

export const masterSlice = createSlice({
  name: 'masterSlice',
  initialState,
  reducers: {
    setItemData: (state, action: PayloadAction<ItemData[]>) => {
      state.itemData = action.payload;
      return state;
    },
  },
});

export const { setItemData } = masterSlice.actions;
export default masterSlice.reducer;

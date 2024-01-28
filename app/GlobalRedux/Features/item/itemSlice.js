'use client'

import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    item: [],
  },
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload
    },
    
  },
});

export const {
  setItem,
} = itemSlice.actions;

export default itemSlice.reducer;
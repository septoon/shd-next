'use client'

import { data } from '@/app/api/data';
import { createSlice } from '@reduxjs/toolkit';


const firstKey = Object.keys(data)[0];

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    item: data[firstKey],
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
'use client'

import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
    
  },
});

export const {
  setIsOpen,
} = burgerSlice.actions;

export default burgerSlice.reducer;
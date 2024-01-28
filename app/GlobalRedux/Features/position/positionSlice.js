'use client'

import { createSlice } from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: 'position',
  initialState: {
    position: 'center',
  },
  reducers: {
    setPosition: (state, action) => {
      state.position = action.payload
    },
    
  },
});

export const {
  setPosition,
} = positionSlice.actions;

export default positionSlice.reducer;
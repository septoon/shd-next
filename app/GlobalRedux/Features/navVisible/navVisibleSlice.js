'use client';

import { createSlice } from '@reduxjs/toolkit';

const navVisibleSlice = createSlice({
  name: 'navVisible',
  initialState: {
    navVisible: false,
  },
  reducers: {
    setNavVisible: (state, action) => {
      state.navVisible = action.payload;
    },
  },
});

export const { setNavVisible } = navVisibleSlice.actions;

export default navVisibleSlice.reducer;

'use client'

import { createSlice } from '@reduxjs/toolkit';

const catalogNameSlice = createSlice({
  name : 'catalogName',
  initialState: {
    name: '',
  },
  reducers: {
    setCatalogName: (state, action) => {
      return { ...state, name: action.payload };
    },
  },
});

export const {
  setCatalogName,
} = catalogNameSlice.actions;

export default catalogNameSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    catalogData: [],
    isActive: false,
  },
  reducers: {
    addCatalogList: (state, action) => {
      state.catalogData = action.payload;
    },
    toggleIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { addCatalogList, toggleIsActive } = catalogSlice.actions;

export default catalogSlice.reducer;

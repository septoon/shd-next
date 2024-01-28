'use client';

import { configureStore } from '@reduxjs/toolkit';

import burgerReducer from './Features/burger/burgerSlice';
import catalogSlice from './Features/catalog/catalogSlice';
import cartSlice from './Features/cart/cartSlice';
import catalogNameSlice from './Features/catalogName/catalogNameSlice';
import itemSlice from './Features/item/itemSlice';
import positionSlice from './Features/position/positionSlice';
import navVisibleSlice from './Features/navVisible/navVisibleSlice';

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
    catalog: catalogSlice,
    cart: cartSlice,
    catalogName: catalogNameSlice,
    item: itemSlice,
    navVisible: navVisibleSlice,
    position: positionSlice,
  },
});

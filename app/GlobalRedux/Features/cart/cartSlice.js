import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addDishToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      state.totalCount += 1;
      state.totalPrice += parseInt(action.payload.price);
    },
    clearDishCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    removeDish: (state, action) => {
      const { dishId } = action.payload;
      const removedItem = state.items.find((item) => item.id === dishId);

      if (removedItem) {
        state.totalCount -= removedItem.quantity;
        state.totalPrice -= parseInt(removedItem.price) * removedItem.quantity;
        state.items = state.items.filter((item) => item.id !== dishId);
      }
    },
    incrementDish: (state, action) => {
      const { dishId } = action.payload;
      const existingItem = state.items.find((item) => item.id === dishId);

      if (existingItem) {
        state.items.push({ ...existingItem, quantity: 1 });
        state.totalCount += 1;
        state.totalPrice += parseInt(existingItem.price);
      }
    },
    decrementDish: (state, action) => {
      const { dishId } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === dishId);
    
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingItemIndex];
        
        existingItem.quantity -= 1;
        state.totalCount -= 1;
        state.totalPrice -= parseInt(existingItem.price);
    
        if (existingItem.quantity === 0) {
          updatedItems.splice(existingItemIndex, 1);
        }
    
        state.items = updatedItems;
      }
    },
    
  },
});

export const {
  addDishToCart,
  clearDishCart,
  removeDish,
  incrementDish,
  decrementDish,
} = cartSlice.actions;

export default cartSlice.reducer;
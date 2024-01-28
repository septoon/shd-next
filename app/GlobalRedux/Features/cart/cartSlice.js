import { createSlice } from '@reduxjs/toolkit';

const localItems = localStorage.getItem('items') != null ? JSON.parse(localStorage.getItem('items')) : []
const localCount = localStorage.getItem('totalCount') != null ? JSON.parse(localStorage.getItem('totalCount')) : 0
const localPrice = localStorage.getItem('totalPrice') != null ? JSON.parse(localStorage.getItem('totalPrice')) : 0

const setItemFunc = (items, totalCount, totalPrice) => {
  localStorage.setItem('items', JSON.stringify(items))
  localStorage.setItem('totalCount', JSON.stringify(totalCount))
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: localItems,
    totalCount: localCount,
    totalPrice: localPrice,
  },
  reducers: {
    addDishToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      state.totalCount += 1;
      state.totalPrice += parseInt(action.payload.price);

      setItemFunc(state.items.map(item => item), state.totalCount, state.totalPrice)
    },
    clearDishCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      setItemFunc(state.items.map(item => item), state.totalCount, state.totalPrice)
    },
    removeDish: (state, action) => {
      const { dishId } = action.payload;
      const removedItem = state.items.find((item) => item.id === dishId);

      if (removedItem) {
        state.totalCount -= removedItem.quantity;
        state.totalPrice -= parseInt(removedItem.price) * removedItem.quantity;
        state.items = state.items.filter((item) => item.id !== dishId);
      }
      setItemFunc(state.items.map(item => item), state.totalCount, state.totalPrice)
    },
    incrementDish: (state, action) => {
      const { dishId } = action.payload;
      const existingItem = state.items.find((item) => item.id === dishId);

      if (existingItem) {
        state.items.push({ ...existingItem, quantity: 1 });
        state.totalCount += 1;
        state.totalPrice += parseInt(existingItem.price);
      }
      setItemFunc(state.items.map(item => item), state.totalCount, state.totalPrice)
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
      setItemFunc(state.items.map(item => item), state.totalCount, state.totalPrice)
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

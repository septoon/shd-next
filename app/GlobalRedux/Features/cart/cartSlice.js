import { createSlice } from '@reduxjs/toolkit';

// Function to save cart data to localStorage
const setItemFunc = (items, totalCount, totalPrice) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('totalCount', JSON.stringify(totalCount));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }
};

// Initial state without accessing window or localStorage
const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Set initial cart state from localStorage
    setInitialCartState: (state, action) => {
      state.items = action.payload.items || [];
      state.totalCount = action.payload.totalCount || 0;
      state.totalPrice = action.payload.totalPrice || 0;
    },
    // Add dish to cart
    addDishToCart: (state, action) => {
<<<<<<< HEAD
      const { id, name, price, image, options, serving, gram } = action.payload;
=======
      const { id, name, price, image, options, serving, weight, gram } = action.payload;
>>>>>>> 806ff73 (update)
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price: parseFloat(price),
          image,
          options,
          serving,
<<<<<<< HEAD
=======
          weight,
>>>>>>> 806ff73 (update)
          gram,
          quantity: 1,
        });
      }
      state.totalCount += 1;
      state.totalPrice += parseFloat(price);

      // Save updated cart state to localStorage
      setItemFunc(state.items, state.totalCount, state.totalPrice);
    },
    // Decrement dish quantity
    decrementDish: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalCount -= 1;
          state.totalPrice -= parseFloat(price);
        } else {
          state.items = state.items.filter(item => item.id !== id);
          state.totalCount -= 1;
          state.totalPrice -= parseFloat(price);
        }
      }

      // Save updated cart state to localStorage
      setItemFunc(state.items, state.totalCount, state.totalPrice);
    },
    // Remove dish from cart
    removeDish: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalCount -= existingItem.quantity;
        state.totalPrice -= parseFloat(existingItem.price) * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }

      // Save updated cart state to localStorage
      setItemFunc(state.items, state.totalCount, state.totalPrice);
    },
    // Clear the cart
    clearDishCart: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;

      // Save updated cart state to localStorage
      setItemFunc(state.items, state.totalCount, state.totalPrice);
    },
  },
});

export const {
  setInitialCartState,
  addDishToCart,
  decrementDish,
  removeDish,
  clearDishCart,
} = cartSlice.actions;

export default cartSlice.reducer;
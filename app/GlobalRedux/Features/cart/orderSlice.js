import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  phoneNum: '',
  commentValue: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setInitialOrderState: (state, action) => {
      state.address = action.payload.address;
      state.phoneNum = action.payload.phoneNum;
      state.commentValue = action.payload.commentValue;
    },
    addAddressToOrder: (state, action) => {
      state.address = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('address', JSON.stringify(state.address));
      }
    },
    addPhoneNumToOrder: (state, action) => {
      state.phoneNum = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('phoneNum', JSON.stringify(state.phoneNum));
      }
    },
    addCommentToOrder: (state, action) => {
      state.commentValue = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('commentValue', JSON.stringify(state.commentValue));
      }
    },
  },
});

export const {
  setInitialOrderState,
  addAddressToOrder,
  addPhoneNumToOrder,
  addCommentToOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
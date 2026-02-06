import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный thunk для получения данных доставки
<<<<<<< HEAD
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contacts.json`);
  return response.data;
});
=======
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contacts.json`, {
      timeout: 8000,
    });
    return response.data;
  }
);
>>>>>>> 806ff73 (update)

const initialState = {
  phoneNumber: '+ 7 (978) 697-84-75',
  address: 'г. Алушта, ул. Ленина 13, ул. Парковая 2',
  scheduleStart: 10,
  scheduleEnd: 23,
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.phoneNumber = action.payload.phoneNumber;
        state.address = action.payload.address;
        state.scheduleStart = action.payload.scheduleStart;
        state.scheduleEnd = action.payload.scheduleEnd;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default contactsSlice.reducer;

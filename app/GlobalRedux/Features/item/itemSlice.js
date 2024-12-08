import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный thunk для получения данных
export const fetchData = createAsyncThunk(
  'item/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/data.json?t=${Date.now()}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Ошибка при получении данных');
    }
  }
);

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    data: {},
    item: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        const firstKey = Object.keys(action.payload)[0];
        state.item = action.payload[firstKey];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ошибка при получении данных';
      });
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;
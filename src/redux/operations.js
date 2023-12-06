import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://650c4d9447af3fd22f676f23.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async ({ rejectWithValue }) => {
    try {
      const data = await axios.get(
        `https://650c4d9447af3fd22f676f23.mockapi.io/advert`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

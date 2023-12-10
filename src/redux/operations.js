import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c4d9447af3fd22f676f23.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?p=${page}&l=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

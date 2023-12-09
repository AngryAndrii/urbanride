import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

// const handlegetAllCarsWithoutPageFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   state.allCarsForFilter = payload;
// };

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.cars = [...state.cars, ...payload];
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    // clearCarsData: state => {
    //   state.allCars = [];
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected);
    //   .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    //   .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

// export const { clearCarsData } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

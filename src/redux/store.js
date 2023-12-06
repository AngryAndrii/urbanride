import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlise';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addToFav: (state, { payload }) => {
      state.favorites.push(payload);
    },
    rmFromFav: (state, { payload }) => {
      state.favorites = state.favorites.filter(el => el.id !== payload.id);
    },
  },
});

export const { addToFav, rmFromFav } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

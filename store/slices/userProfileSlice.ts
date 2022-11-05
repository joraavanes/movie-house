import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types";

interface userProfileState {
  favorites: Movie[];
  watchLater: Movie[];
}

const initialState: userProfileState = {
  favorites: [],
  watchLater: []
}

const userProfile = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    initUserProfile: (state, action) => {
      state.favorites = action.payload.favorites;
      state.watchLater = action.payload.watchLater;
    },
    favoriteMovieToggle: (state, action) => {
      state.favorites.findIndex(m => m.id === action.payload.id) < 0 ?
        state.favorites = state.favorites.concat(action.payload) :
        state.favorites = state.favorites.filter(f => f.id !== action.payload.id);
    },
    watchLaterToggle: (state, action) => {
      state.watchLater.findIndex(m => m.id === action.payload.id) < 0 ?
        state.watchLater = state.watchLater.concat(action.payload) :
        state.watchLater = state.watchLater.filter(f => f.id !== action.payload.id);
    }
  }
});

export const {
  initUserProfile,
  favoriteMovieToggle,
  watchLaterToggle
} = userProfile.actions;

export default userProfile.reducer;
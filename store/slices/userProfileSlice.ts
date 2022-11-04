import { createSlice } from "@reduxjs/toolkit";

interface userProfileState {
  favorites: number[];
  watchLater: number[];
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
      state.favorites.includes(action.payload) ?
        state.favorites = state.favorites.concat(action.payload) :
        state.favorites = state.favorites.filter(f => f !== action.payload);
    },
    watchLaterToggle: (state, action) => {
      state.watchLater.includes(action.payload) ?
        state.watchLater = state.watchLater.concat(action.payload) :
        state.watchLater = state.watchLater.filter(f => f !== action.payload);
    }
  }
});

export const {
  initUserProfile,
  favoriteMovieToggle,
  watchLaterToggle
} = userProfile.actions;

export default userProfile.reducer;
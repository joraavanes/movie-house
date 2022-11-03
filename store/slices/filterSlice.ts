import { createSlice } from '@reduxjs/toolkit';

interface filterSliceState {
  movieTitle: string;
  genre: string;
}

const initialState: filterSliceState = {
  movieTitle: '',
  genre: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    movieTitleChanged: (state, action) => {
      state.movieTitle = action.payload;
    },
    genreChanged: (state, action) => {
      state.movieTitle = '';
      state.genre = action.payload;
    },
  }
})

export const {
  movieTitleChanged,
  genreChanged
} = filterSlice.actions;

export default filterSlice.reducer;
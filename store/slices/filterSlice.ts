import { createSlice } from '@reduxjs/toolkit';

interface filterSliceState {
  movieTitle: string;
  genre: string;
  genreTitle: string;
}

const initialState: filterSliceState = {
  movieTitle: '',
  genre: '',
  genreTitle: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    movieTitleChanged: (state, action) => {
      state.genre = '';
      state.movieTitle = action.payload;
    },
    genreChanged: (state, action) => {
      state.movieTitle = '';
      state.genre = action.payload.genre;
      state.genreTitle = action.payload.genreTitle;
    },
  }
})

export const {
  movieTitleChanged,
  genreChanged
} = filterSlice.actions;

export default filterSlice.reducer;
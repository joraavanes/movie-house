import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';

export const rootReducer = combineReducers({
  filter: filterSlice
});
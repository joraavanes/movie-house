import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import userProfileSlice from './slices/userProfileSlice';

export const rootReducer = combineReducers({
  filter: filterSlice,
  userProfile: userProfileSlice
});
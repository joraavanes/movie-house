import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  const state = store.getState().userProfile;
  window.localStorage.setItem('movie-house-user-profile', JSON.stringify(state));
});
import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

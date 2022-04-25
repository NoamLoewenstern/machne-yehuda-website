import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { RestaurantCategories, WeekDays } from '../../data/restaurants-info';

export interface ISearchState {
  value: {
    categories: RestaurantCategories[];
    justKosher: boolean;
    priceRange?: {
      from?: number;
      till?: number;
    };
    time?: { day?: WeekDays; hour?: string };
  };
}

const initialState: ISearchState = {
  value: {
    categories: [],
    justKosher: false,
    priceRange: undefined,
    time: undefined,
  },
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<RestaurantCategories>) => {
      state.value.categories.push(action.payload);
    },
    unselectCategory: (state, action: PayloadAction<RestaurantCategories>) => {
      state.value.categories = state.value.categories.filter(cat => cat !== action.payload);
    },
    toggleJustKosher: state => {
      state.value.justKosher = !state.value.justKosher;
    },
    editPriceRange: (
      state,
      action: PayloadAction<{
        from?: number;
        till?: number;
      }>,
    ) => {
      state.value.priceRange ||= {};
      state.value.priceRange.from = action.payload.from || state.value.priceRange.from;
      state.value.priceRange.till = action.payload.till || state.value.priceRange.till;
    },
    resetPriceRange: state => {
      state.value.priceRange = undefined;
    },
    setTime: (state, action: PayloadAction<{ day?: WeekDays; hour?: string }>) => {
      state.value.time = { ...(state.value.time || {}), ...action.payload };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const {
  selectCategory,
  unselectCategory,
  toggleJustKosher,
  editPriceRange,
  resetPriceRange,
  setTime,
  reset: resetSearchFilters,
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.searchSlice.value;

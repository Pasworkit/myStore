import { createSlice } from '@reduxjs/toolkit';

const filterCategoriesSlice = createSlice({
  name: 'categoriesFilter',

  initialState: {
    hanging: false,
    flowering: false,
    'ferns-and-palms': false,
    'succulents-and-cacti': false,
    categories: [],
  },

  reducers: {
    checkedCategoriesFilter: (state, action) => {
      if (action.payload.checked) {
        state[action.payload.name] = action.payload.checked;
        state.categories.push(action.payload.name);
      } else {
        state[action.payload.name] = false;
        state.categories = state.categories.filter(el => el !== action.payload.name);
      }
    },

    deleteCategorisFilter: (state, action) => {
      state[action.payload] = false;
      state.categories = state.categories.filter(el => el !== action.payload);
    },

    createNewArrCategory: (state, action) => {
      state.categories = action.payload;
      // eslint-disable-next-line no-return-assign
      state.categories.forEach(el => state[el] = true);
    },
  },
});

export const { checkedCategoriesFilter, deleteCategorisFilter, createNewArrCategory } = filterCategoriesSlice.actions;
export default filterCategoriesSlice.reducer;

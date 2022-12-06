import { createSlice } from '@reduxjs/toolkit';

const filterCatalogSlice = createSlice({
  name: 'filter',

  initialState: {
    hanging: false,
    flowering: false,
    'ferns-and-palms': false,
    'succulents-and-cacti': false,
    categories: [],
    popular: false,
    'not-popular': false,
    isPopular: [],
    'easy-care-yes': false,
    'easy-care-no': false,
    isEasyCare: [],
    safe: false,
    'not-safe': false,
    isPetAndBabySafe: [],
    short: false,
    medium: false,
    high: false,
    multirange: false,
    heightRange: [],
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
    checkedPopularFilter: (state, action) => {
      if (action.payload.checked && action.payload.name === 'popular') {
        state[action.payload.name] = action.payload.checked;
        state.isPopular.push('true');
      } else {
        state.popular = false;
        state.isPopular = state.isPopular.filter(el => el !== 'true');
      }

      if (action.payload.checked && action.payload.name === 'not-popular') {
        state[action.payload.name] = action.payload.checked;
        state.isPopular.push('false');
      } else {
        state['not-popular'] = false;
        state.isPopular = state.isPopular.filter(el => el !== 'false');
      }
    },
    checkedEasyCareFilter: (state, action) => {
      if (action.payload.checked && action.payload.name === 'easy-care-yes') {
        state[action.payload.name] = action.payload.checked;
        state.isEasyCare.push('true');
      } else {
        state['easy-care-yes'] = false;
        state.isEasyCare = state.isEasyCare.filter(el => el !== 'true');
      }

      if (action.payload.checked && action.payload.name === 'easy-care-no') {
        state[action.payload.name] = action.payload.checked;
        state.isEasyCare.push('false');
      } else {
        state['easy-care-no'] = false;
        state.isEasyCare = state.isEasyCare.filter(el => el !== 'false');
      }
    },

    checkedPetAndBabeSafeFilter: (state, action) => {
      if (action.payload.checked && action.payload.name === 'safe') {
        state[action.payload.name] = action.payload.checked;
        state.isPetAndBabySafe.push('true');
      } else {
        state.safe = false;
        state.isPetAndBabySafe = state.isPetAndBabySafe.filter(el => el !== 'true');
      }

      if (action.payload.checked && action.payload.name === 'not-safe') {
        state[action.payload.name] = action.payload.checked;
        state.isPetAndBabySafe.push('false');
      } else {
        state['not-safe'] = false;
        state.isPetAndBabySafe = state.isPetAndBabySafe.filter(el => el !== 'false');
      }
    },

    checkedHeightRangeFilter: (state, action) => {
      if (action.payload.checked) {
        state[action.payload.name] = action.payload.checked;
        state.heightRange.push(action.payload.name);
      } else {
        state[action.payload.name] = false;
        state.heightRange = state.heightRange.filter(el => el !== action.payload.name);
      }
    },
  },
});

export const {
  checkedCategoriesFilter, checkedPopularFilter, checkedEasyCareFilter, checkedPetAndBabeSafeFilter, checkedHeightRangeFilter,
} = filterCatalogSlice.actions;

export default filterCatalogSlice.reducer;

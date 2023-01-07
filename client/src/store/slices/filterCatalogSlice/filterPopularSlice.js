import { createSlice } from '@reduxjs/toolkit';

const filterPopularSlice = createSlice({
  name: 'popularFilter',

  initialState: {
    popular: false,
    'not-popular': false,
    isPopular: [],
  },

  reducers: {
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

    deleteIsPopularFilter: (state, action) => {
      state[action.payload.name] = false;
      state.isPopular = state.isPopular.filter(el => el !== action.payload.bool);
    },

    createNewArrIsPopular: (state, action) => {
      if (action.payload === 'true' && state.isPopular.length === 0) {
        state.isPopular.push(action.payload);
        state.popular = true;
      }

      if (action.payload === 'false' && state.isPopular.length === 0) {
        state.isPopular.push(action.payload);
        state['not-popular'] = true;
      }
    },
  },
});

export const { checkedPopularFilter, deleteIsPopularFilter, createNewArrIsPopular } = filterPopularSlice.actions;
export default filterPopularSlice.reducer;

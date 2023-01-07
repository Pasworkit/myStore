import { createSlice } from '@reduxjs/toolkit';

const filterEasyCareSlice = createSlice({
  name: 'easyCareFilter',

  initialState: {
    'easy-care-yes': false,
    'easy-care-no': false,
    isEasyCare: [],
  },

  reducers: {
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

    deleteIsEasyCareFilter: (state, action) => {
      state[action.payload.name] = false;
      state.isEasyCare = state.isEasyCare.filter(el => el !== action.payload.bool);
    },

    createNewArrIsEasyCare: (state, action) => {
      if (action.payload === 'true' && state.isEasyCare.length === 0) {
        state.isEasyCare.push(action.payload);
        state['easy-care-yes'] = true;
      }

      if (action.payload === 'false') {
        state.isEasyCare.push(action.payload);
        state['easy-care-no'] = true;
      }
    },
  },
});

export const { checkedEasyCareFilter, deleteIsEasyCareFilter, createNewArrIsEasyCare } = filterEasyCareSlice.actions;
export default filterEasyCareSlice.reducer;

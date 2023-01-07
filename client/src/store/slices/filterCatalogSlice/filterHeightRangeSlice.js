import { createSlice } from '@reduxjs/toolkit';

const filterHeightRangeSlice = createSlice({
  name: 'heightRangeFilter',

  initialState: {
    short: false,
    medium: false,
    high: false,
    multirange: false,
    heightRange: [],
  },

  reducers: {
    checkedHeightRangeFilter: (state, action) => {
      if (action.payload.checked) {
        state[action.payload.name] = action.payload.checked;
        state.heightRange.push(action.payload.name);
      } else {
        state[action.payload.name] = false;
        state.heightRange = state.heightRange.filter(el => el !== action.payload.name);
      }
    },

    deleteHeightRangeFilter: (state, action) => {
      state[action.payload] = false;
      state.heightRange = state.heightRange.filter(el => el !== action.payload);
    },

    createNewArrHeightRange: (state, action) => {
      state.heightRange = action.payload;
      // eslint-disable-next-line no-return-assign
      state.heightRange.forEach(el => state[el] = true);
    },
  },
});

export const { checkedHeightRangeFilter, deleteHeightRangeFilter, createNewArrHeightRange } = filterHeightRangeSlice.actions;
export default filterHeightRangeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterPriceSlice = createSlice({
  name: 'priceFilter',

  initialState: {
    priceSlider: [0, 500],
    minPriceInput: 0,
    maxPriceInput: 500,
    minPrice: null,
    maxPrice: null,
  },

  reducers: {
    changeInputPriceFilter: (state, action) => {
      state.minPriceInput = Number(action.payload.minPrice);
      state.maxPriceInput = Number(action.payload.maxPrice);
      state.priceSlider = [Number(action.payload.minPrice), Number(action.payload.maxPrice)];
      state.minPrice = Number(action.payload.minPrice);
      state.maxPrice = Number(action.payload.maxPrice);
    },

    deletePriceValueFilter: (state, action) => {
      state.priceSlider = action.payload.startPrice;
      // eslint-disable-next-line prefer-destructuring
      state.minPriceInput = action.payload.startPrice[0];
      // eslint-disable-next-line prefer-destructuring
      state.maxPriceInput = action.payload.startPrice[1];
      // eslint-disable-next-line prefer-destructuring
      state.minPrice = action.payload.startValue;
      // eslint-disable-next-line prefer-destructuring
      state.maxPrice = action.payload.startValue;
    },

    createNewPriceFilter: (state, action) => {
      // eslint-disable-next-line prefer-destructuring
      state.minPriceInput = action.payload[0];
      // eslint-disable-next-line prefer-destructuring
      state.maxPriceInput = action.payload[1];
      // eslint-disable-next-line prefer-destructuring
      state.minPrice = action.payload[0];
      // eslint-disable-next-line prefer-destructuring
      state.maxPrice = action.payload[1];
    },

    changeSliderPriceFilter: (state, action) => {
      state.priceSlider = action.payload;
      // eslint-disable-next-line prefer-destructuring
      state.minPriceInput = action.payload[0];
      // eslint-disable-next-line prefer-destructuring
      state.maxPriceInput = action.payload[1];
    },
  },
});

export const {
  changeInputPriceFilter, deletePriceValueFilter, createNewPriceFilter, changeSliderPriceFilter,
} = filterPriceSlice.actions;
export default filterPriceSlice.reducer;

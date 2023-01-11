import { createSlice } from '@reduxjs/toolkit';
import { getSlides } from '../../api/api';

const slidesSlice = createSlice({
  name: 'slides',
  initialState: {
    data: [],
  },
  reducers: {
    slidesAll: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { slidesAll } = slidesSlice.actions;

const fetchSlides = () => async (dispatch) => {
  try {
    const { status, data } = await getSlides();
    if (status === 200) {
      dispatch(slidesAll(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchSlides, slidesAll };

export default slidesSlice.reducer;

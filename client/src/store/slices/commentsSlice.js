import { createSlice } from '@reduxjs/toolkit';
import { getComments } from '../../api/api';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
  },
  reducers: {
    commentsAll: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { commentsAll } = commentsSlice.actions;

const fetchComments = () => async (dispatch) => {
  try {
    const { status, data } = await getComments();
    if (status === 200) {
      dispatch(commentsAll(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchComments, commentsAll };

export default commentsSlice.reducer;

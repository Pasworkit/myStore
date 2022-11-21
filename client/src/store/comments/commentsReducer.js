import produce from 'immer';
import {
  GET_COMMENTS,
} from './actionsComments';

const initialState = {
  data: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS: {
      return produce(state, (draftState) => {
        draftState.data = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default commentsReducer;

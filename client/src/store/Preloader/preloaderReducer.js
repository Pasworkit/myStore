import produce from 'immer';
import { SET_PRELOADER_IS_OPEN } from './actions';

const initialValue = {
  isOpen: false,
};

const preloaderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_PRELOADER_IS_OPEN: {
      return produce(state, draftState => {
        draftState.isOpen = action.payload;
      });
    }
    default:
      return state;
  }
};

export default preloaderReducer;

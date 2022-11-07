import { ADD_FAVORITES } from './actionsFavorites';

const initialState = {
  favorites: [],
};
// eslint-disable-next-line default-param-last
const reducerFavorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default reducerFavorites;

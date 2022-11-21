import { combineReducers } from 'redux';
import reducerProducts from './products/reducerProducts';
import catalogReducer from './catalog/catalogReducer';
import commentsReducer from './comments/commentsReducer';

const rootReducer = combineReducers({
  productsAll: reducerProducts,
  catalogProducts: catalogReducer,
  commentsAll: commentsReducer,
});

export default rootReducer;

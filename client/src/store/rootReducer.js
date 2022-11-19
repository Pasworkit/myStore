import { combineReducers } from 'redux';
import reducerProducts from './products/reducerProducts';
import catalogReducer from './catalog/catalogReducer';

const rootReducer = combineReducers({
  productsAll: reducerProducts,
  catalogProducts: catalogReducer,
});

export default rootReducer;

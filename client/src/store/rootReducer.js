import { combineReducers } from 'redux';
import reducerProducts from './products/reducerProducts';

const rootReducer = combineReducers({
  productsAll: reducerProducts,
});

export default rootReducer;

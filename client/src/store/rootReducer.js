import { combineReducers } from 'redux';
import reducerProducts from './products/reducerProducts';
import catalogReducer from './catalog/catalogReducer';
import preloaderReducer from './Preloader/preloaderReducer';

const rootReducer = combineReducers({
  productsAll: reducerProducts,
  catalogProducts: catalogReducer,
  preloader: preloaderReducer,
});

export default rootReducer;

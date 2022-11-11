import { combineReducers } from 'redux';
import reducerProducts from './products/reducerProducts';
import reducerShopCatalog from './ShopCatalog/reducerShopCatalog';

const rootReducer = combineReducers({
  productsAll: reducerProducts,
  productsShopCatalog: reducerShopCatalog,
});

export default rootReducer;

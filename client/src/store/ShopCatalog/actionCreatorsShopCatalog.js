import axios from 'axios';
import { GET__ALL_PRODUCTS_IN_SHOP } from './actionsShopCatalog';

export const getAllProductsInShop = () => async (dispatch) => {
  try {
    const data = await axios.get('./products/products.json');

    dispatch({ type: GET__ALL_PRODUCTS_IN_SHOP, payload: data });
  } catch (err) {
    console.warn(err);
  }
};

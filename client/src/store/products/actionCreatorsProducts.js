import GET_PRODUCTS from './actionsProducts';

const getProductsAC = () => async (dispatch) => {
  const productsDataInLocalStorage = localStorage.getItem('productsData');
  let productsData = JSON.parse(productsDataInLocalStorage);
  if (productsData) {
    dispatch({ type: GET_PRODUCTS, payload: productsData });
  } else {
    productsData = await fetch('./products/products.json').then((res) => res.json());
    localStorage.setItem('productsData', JSON.stringify(productsData));
    dispatch({ type: GET_PRODUCTS, payload: productsData });
  }
};
export default getProductsAC;

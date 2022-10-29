import GET_PRODUCTS from './actionsProducts';

const initialState = { products: JSON.parse(localStorage.getItem('productsData')) || [1, 2, 3] };
// eslint-disable-next-line default-param-last
const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, products: [...action.payload] };
    }
    default: {
      return state;
    }
  }
};

export default reducerProducts;

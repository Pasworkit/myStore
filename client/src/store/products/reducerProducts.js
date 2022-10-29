import GET_PRODUCTS from './actionsProducts';

const initialState = { products: [{}] };
// { products: JSON.parse(localStorage.getItem('productsData')) || [] };
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

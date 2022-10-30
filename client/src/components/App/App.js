import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import AppRoutes from '../../AppRoutes';
import getProductsAC from '../../store/products/actionCreatorsProducts';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAC());
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

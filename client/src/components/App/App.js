import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import AppRoutes from '../../AppRoutes';
import { getProducts } from '../../store/slices/productsSlice/actionCreators';
import { getAllProducts } from '../../store/slices/catalogSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAllProducts());
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

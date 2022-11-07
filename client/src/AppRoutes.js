import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShopPage from './pages/ShopPage/ShopPage';
import BasketPage from './pages/BasketPage/BasketPage';
import HomePage from './pages/HomePage/HomePage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/Basket" element={<BasketPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

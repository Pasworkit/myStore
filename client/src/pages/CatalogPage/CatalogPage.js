import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Catalog from '../../components/Catalog/Catalog';
import { getAllProductsAC, paginationProductsNumberAC } from '../../store/catalog/actionCreatorCatalog';

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAC());
    setTimeout(() => {
      dispatch(paginationProductsNumberAC());
    }, 300);
  }, []);

  return (
    <main>
      <Catalog />
    </main>
  );
}
export default CatalogPage;

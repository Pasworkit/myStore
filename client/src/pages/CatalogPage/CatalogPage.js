import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Catalog from '../../components/Catalog/Catalog';

import { getAllProducts, paginationCatalog } from '../../store/slices/catalogSlice';

function CatalogPage() {
  const [searchParams] = useSearchParams();
  const getUrlParams = searchParams.get('categories');
  const dispatch = useDispatch();

  useEffect(() => {
    if (getUrlParams === '') {
      dispatch(getAllProducts());
      setTimeout(() => {
        dispatch(paginationCatalog());
      }, 300);
    }
  }, []);

  return (
    <main>
      <Catalog />
    </main>
  );
}
export default CatalogPage;

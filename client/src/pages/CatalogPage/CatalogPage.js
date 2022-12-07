// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import Catalog from '../../components/Catalog/Catalog';

// import { getAllProducts, paginationCatalog } from '../../store/slices/catalogSlice';

function CatalogPage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProducts());
  //   setTimeout(() => {
  //     dispatch(paginationCatalog());
  //   }, 300);
  // }, []);

  return (
    <main>
      <Catalog />
    </main>
  );
}
export default CatalogPage;

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Category.module.scss';

function Category() {
  const categoryPathName = useLocation().pathname.slice(1);
  const products = useSelector((state) => state.productsAll.products);
  const productsOfTheCategory = products.filter((product) => product.categories.trim().toLowerCase().split('&').join('and')
    .split(' ')
    .join('-') === categoryPathName);
  const categoryName = productsOfTheCategory.length > 0 ? productsOfTheCategory[0].categories : 'There is no products in this category';
  const [favoriteArr, setFavoriteArr] = useState(JSON.parse(localStorage.getItem('favoriteArr')) || []);
  const toggleFavoriteStatus = (itemNo) => {
    const index = favoriteArr.indexOf(itemNo);
    const newFavoriteArr = [...favoriteArr];
    if (index !== -1) {
      newFavoriteArr.splice(index, 1);
    } else {
      newFavoriteArr.push(itemNo);
    }
    setFavoriteArr(newFavoriteArr);
    localStorage.setItem('favoriteArr', JSON.stringify(newFavoriteArr));
  };
  // eslint-disable-next-line max-len
  const CategoryItems = productsOfTheCategory.map((item) => <Card toggleFavoriteStatus={toggleFavoriteStatus} key={item.itemNo} productCardData={item} />);

  const documentMetaDesc = `These are products of the category ${categoryName}`;
  useEffect(() => {
    document.title = categoryName;
    document.querySelector("meta[name='description']").setAttribute('content', documentMetaDesc);
  }, [categoryName, documentMetaDesc]);

  const renderCategoryTitle = (stringTitle) => [...stringTitle[0].toUpperCase(), stringTitle.slice(1)].join('').split('-').join(' ').split('and')
    .join('&');

  return (
    <section className={styles.categoryPageContainer}>
      <h1 className={styles.categoryTitle}>
        {renderCategoryTitle(categoryName)}
      </h1>
      <div className={styles.categoryItemsWrapper}>
        {CategoryItems}
      </div>
    </section>
  );
}

export default Category;

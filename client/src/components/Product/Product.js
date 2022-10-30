// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import styles from './Product.module.scss';

function Product() {
  const products = useSelector((state) => state.productsAll.products);
  let indOfP;
  // eslint-disable-next-line no-unused-expressions
  products.length > 1 ? indOfP = 1 : indOfP = 0;
  const theProduct = products[indOfP];
  // eslint-disable-next-line no-console
  console.log(theProduct);
  const {
    // eslint-disable-next-line max-len
    productName, currentPrice, imgUrl, itemNo, description, category, light, watering, humidity, petBabySafe, easyCare, inStock,
    // eslint-disable-next-line max-len
  } = theProduct; /* theProduct should be instead of products here */

  return (
    <>
      <section>
        <div>
          <BreadCrumbs />
        </div>
        <h1 className={styles.name}>{productName}</h1>
        <div className={styles.case}>
          <div className={styles.productImgWrapper}>
            <img src={imgUrl} alt={productName} className={styles.productImg} />
          </div>
          <div className={styles.productInfoWrapper}>
            <p>
              <span>ItemNo: </span>
              {itemNo}
            </p>
            <p>
              <span>Category: </span>
              {category}
            </p>
            <p>
              <span>Description: </span>
              {description}
            </p>
            <p>
              <span>Light: </span>
              {light}
            </p>
            <p>
              <span>Watering: </span>
              {watering}
            </p>
            <p>
              <span>Humidity: </span>
              {humidity}
            </p>
            <p>
              <span>Pet & Baby safe: </span>
              {petBabySafe}
            </p>
            <p>
              <span>Easy Care: </span>
              {easyCare}
            </p>
            <div className={styles.priceWrapper}>
              <h4 className={styles.price}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span>Price: </span>
                $
                {currentPrice}
              </h4>
              <p>
                <span>In stock: </span>
                {inStock}
              </p>
              {/* eslint-disable-next-line react/button-has-type */}
            </div>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </section>
      <div>
        <SimilarProducts />
      </div>
    </>
  );
}

export default Product;
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import YmalProducts from '../YmalProducts/YmalProducts';
import styles from './Product.module.scss';
import ButtonBuy from '../ButtonBuy/ButtonBuy';

function Product() {
  const [show, setShow] = useState(false);
  const handleOpenAccordion = () => {
    setShow(!show); // Toggle accordion
  };
  const products = useSelector((state) => state.productsAll.products);
  let indOfP;
  // eslint-disable-next-line no-unused-expressions
  products.length > 1 ? indOfP = 1 : indOfP = 0;
  const theProduct = products[indOfP];
  const {
    // eslint-disable-next-line max-len
    id, productName, currentPrice, imgUrl, itemNo, description, category, botanicName, light, watering, humidity, petBabySafe, easyCare, inStock,
  } = theProduct;

  const [quantityCount, setQuantityCount] = useState(1);
  const incrementProductQuantity = () => {
    setQuantityCount((prevState) => {
      if (prevState < inStock) {
        return prevState + 1;
      }
      // eslint-disable-next-line no-alert
      alert(`You can't buy more products than there is in stock: ${inStock}`);
      return prevState;
    });
  };
  const decrementProductQuantity = () => {
    setQuantityCount((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  };

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
              <span className={styles.infoTitleText}>ItemNo: </span>
              {itemNo}
            </p>
            <p className={styles.careHintsText}>
              <LightModeOutlinedIcon className={styles.careHintsGlyph} />
              <span className={styles.careHintsTitle}>Light: </span>
              <br />
              {light}
            </p>
            <p className={styles.careHintsText}>
              <WavesOutlinedIcon className={styles.careHintsGlyph} />
              <span className={styles.careHintsTitle}>Watering: </span>
              <br />
              {watering}
            </p>
            <p className={styles.careHintsText}>
              <CloudOutlinedIcon className={styles.careHintsGlyph} />
              <span className={styles.careHintsTitle}>Humidity: </span>
              <br />
              {humidity}
            </p>
            <div className={styles.accordion}>
              <div role="button" tabIndex={0} className={styles.accordionHeader} onClick={handleOpenAccordion} onKeyDown={handleOpenAccordion}>
                <div>More information</div>
                {/* eslint-disable-next-line max-len */}
                <div>{show ? <ArrowBackIosNewOutlinedIcon className={styles.accordionSign} /> : <ArrowForwardIosOutlinedIcon className={styles.accordionSign} />}</div>
              </div>
              {show && (
              <div>
                <p>
                  <span className={styles.infoTitleText}>Category: </span>
                  {category}
                </p>
                <p>
                  <span className={styles.infoTitleText}>Botanical name: </span>
                  {botanicName}
                </p>
                <p>
                  <span className={styles.infoTitleText}>Description: </span>
                  {description}
                </p>
                <p>
                  <span className={styles.infoTitleText}>Pet & Baby safe: </span>
                  {petBabySafe}
                </p>
                <p>
                  <span className={styles.infoTitleText}>Easy Care: </span>
                  {easyCare}
                </p>
              </div>
              )}
            </div>
            <div className={styles.priceWrapper}>
              <div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span className={styles.infoTitleText}>Price: </span>
                <span className={styles.price}>
                &nbsp;$
                  {currentPrice}
                </span>
              </div>
              <p>
                <span>In stock: </span>
                {inStock}
              </p>
            </div>
            <div className={styles.quantityBlock}>
              <p className={styles.infoTitleText}>Quantity:</p>
              <p className={styles.quantitySet}>
                <span role="button" tabIndex={0} onClick={decrementProductQuantity} onKeyDown={decrementProductQuantity}>
                  <RemoveIcon className={styles.minus} />
                </span>
                <span className={styles.num}>{quantityCount}</span>
                <span role="button" tabIndex={0} onClick={incrementProductQuantity} onKeyDown={incrementProductQuantity}>
                  <AddIcon className={styles.plus} />
                </span>
              </p>
            </div>
            <ButtonBuy
              handleClick={() => {
              //  setCurrentProduct(productInfo);
              }}
              backgroundColor="#456F49"
              padding="15px 102px"
              text="Add to cart"
              id={id}
            />
          </div>
        </div>
      </section>
      <div>
        <YmalProducts products={products} />
      </div>
    </>
  );
}

export default Product;

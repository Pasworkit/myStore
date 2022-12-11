import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCookies } from 'react-cookie';
import YmalProducts from '../YmalProducts/YmalProducts';
import styles from './Product.module.scss';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import Breadcrumbs from '../Breadсrumbs/Breadсrumbs';
import { toggleProductInCart, incrementQuantityProductInCart, decrementQuantityProductInCart } from '../../store/slices/productsSlice';

function Product() {
  const { linkItemNo } = useParams();
  const [show, setShow] = useState(false);
  const handleOpenAccordion = () => {
    setShow(!show); // Toggle accordion
  };
  const products = useSelector((state) => state.productsAll.products);

  const [theProduct] = products.filter((product) => product.itemNo === linkItemNo);
  const {
    _id,
    itemNo,
    name,
    currentPrice,
    imageUrls,
    description,
    categories,
    botanicalName,
    isPetAndBabySafe,
    isEasyCare,
    quantity,
  } = theProduct;
  const {
    text, light, watering, humidity,
  } = description;

  //  eslint-disable-next-line max-len
  const documentMetaDesc = `${botanicalName} known as ${name}: ${text.slice(0, 97)}...`;
  useEffect(() => {
    document.title = name;
    document.querySelector("meta[name='description']").setAttribute('content', documentMetaDesc);
  }, [name, documentMetaDesc]);

  const [favoriteArr, setFavoriteArr] = useState(JSON.parse(localStorage.getItem('favoriteArr')) || []);
  const isFavoriteStatus = favoriteArr.indexOf(itemNo) !== -1;
  const toggleFavoriteStatus = () => {
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

  const isInCart = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).isInCart);
  const quantityCardCount = useSelector((store) => store.productsAll.products.find((product) => product._id === _id).quantityInCart);

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies();
  const addToCartHandler = () => {
    dispatch(toggleProductInCart(_id, isInCart, cookies.token, quantityCardCount));
  };
  const incrementCardQuantity = () => dispatch(incrementQuantityProductInCart(cookies.token, _id, quantityCardCount, quantity, isInCart));
  const decrementCardQuantity = () => dispatch(decrementQuantityProductInCart(_id, quantityCardCount, isInCart, cookies.token));

  const renderStringTitle = (stringTitle) => [...stringTitle[0].toUpperCase(), stringTitle.slice(1)].join('').split('-').join(' ');

  return (
    <section className={styles.productPageContainer}>
      <div>
        {/* eslint-disable-next-line max-len */}
        <Breadcrumbs currenProductCategory={renderStringTitle(categories)} currenProductPage={renderStringTitle(name)} midLinkName={renderStringTitle(categories)} />
      </div>
      <h1 className={styles.name}>{renderStringTitle(name)}</h1>
      <div className={styles.case}>
        <div className={styles.productImgWrapper}>
          <img src={imageUrls} alt={name} className={styles.productImg} />
        </div>
        <div className={styles.productInfoWrapper}>
          <div className={styles.topLine}>
            <p>
              <span className={styles.infoTitleText}>ItemNo: </span>
              {itemNo}
            </p>
            <div role="button" tabIndex={0} onClick={() => toggleFavoriteStatus(itemNo)} onKeyDown={() => toggleFavoriteStatus(itemNo)}>
              {isFavoriteStatus
                ? (
                  <FavoriteIcon className={styles.star} />
                )
                : (
                  <FavoriteBorderIcon className={styles.star} />
                )}
            </div>
          </div>
          <br />
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
                {categories}
              </p>
              <p>
                <span className={styles.infoTitleText}>Botanical name: </span>
                {botanicalName}
              </p>
              <p>
                <span className={styles.infoTitleText}>Description: </span>
                {text}
              </p>
              <p>
                <span className={styles.infoTitleText}>Pet & Baby safe: </span>
                {isPetAndBabySafe === 'true' ? 'Yes.' : 'No.'}
              </p>
              <p>
                <span className={styles.infoTitleText}>Easy Care: </span>
                {isEasyCare === 'true' ? 'Yes.' : 'No.'}
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
              {quantity}
            </p>
          </div>
          <div className={styles.quantityBlock}>
            <p className={styles.infoTitleText}>Quantity:</p>
            <p className={styles.quantitySet}>
              <span role="button" tabIndex={0} onClick={decrementCardQuantity} onKeyDown={decrementCardQuantity}>
                <RemoveIcon className={styles.minus} />
              </span>
              <span className={styles.num}>{quantityCardCount}</span>
              <span role="button" tabIndex={0} onClick={incrementCardQuantity} onKeyDown={incrementCardQuantity}>
                <AddIcon className={styles.plus} />
              </span>
            </p>
          </div>
          <ButtonBuy
            handleClick={() => {
              addToCartHandler();
            }}
            backgroundColor="#456F49"
            padding="15px 102px"
            text={isInCart ? 'Delete' : 'Add to cart'}
            id={itemNo}
          />
        </div>
      </div>
      <div>
        {/* eslint-disable-next-line max-len */}
        <YmalProducts products={products} />
      </div>
    </section>
  );
}

export default Product;

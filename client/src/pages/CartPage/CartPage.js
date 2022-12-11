import Cart from '../../components/Cart/Cart';

function CartPage() {
  const productsInCartSlider = [
    {
      id: 190944,
      title: 'Aloe Vera',
      price: 430,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
    },
    {
      id: 217645,
      title: 'Sansevieria three-beam Moonshine',
      price: 5200,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
    },
    {
      id: 195546,
      title: 'Cactus',
      price: 4300,
      image: 'http://cdn.goodhouse.com.ua/images-jpg/16157/161570.jpg',
    },
    {
      id: 190947,
      title: 'Aloe',
      price: 430,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
    },
    {
      id: 217648,
      title: 'Sansevieria  Moonshine',
      price: 5200,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
    },
    {
      id: 195549,
      title: 'Cactus',
      price: 4300,
      image: 'http://cdn.goodhouse.com.ua/images-jpg/16157/161570.jpg',
    }, {
      id: 190950,
      title: 'Aloe Vera',
      price: 430,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
    },
    {
      id: 217651,
      title: 'Sansevieria',
      price: 5200,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
    },
    {
      id: 195552,
      title: 'Cactus',
      price: 4300,
      image: 'http://cdn.goodhouse.com.ua/images-jpg/16157/161570.jpg',
    },
  ];

  return (
    <Cart productsCartSlider={productsInCartSlider} />
  );
}
export default CartPage;

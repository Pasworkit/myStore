import Cart from '../../components/Cart/Cart';

function CartPage() {
  const productsInCart = [
    {
      id: 190906,
      title: 'Алое вера',
      price: 430,
      image: 'https://orchidsart.com/wp-content/uploads/2018/11/%D0%90%D0%BB%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5.jpg',
      color: 'black',
    },
    {
      id: 217605,
      title: 'Сансевиерия трехпучковая Муншайн',
      price: 5200,
      image: 'https://cactus.by/sites/default/files/styles/product/public/products/145801758_3672791376137428_7668839690226034577_n_0.jpg?itok=C-m8QIDq',
      color: 'black-orange',
    },
    {
      id: 195568,
      title: 'Кактус',
      price: 4300,
      image: 'http://cdn.goodhouse.com.ua/images-jpg/16157/161570.jpg',
      color: 'black',
    },
  ];

  return (
    <Cart products={productsInCart} />
  );
}
export default CartPage;

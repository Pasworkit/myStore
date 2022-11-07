import {
  List, ListItem, ListItemText,
} from '@mui/material';
import SecDelivery from '../../img/SecDelivery.svg';
import Delivery from '../../img/Delivery.svg';
import Payment from '../../img/Payment.svg';
import styles from './SectionDelivery.module.scss';

function SectionDelivery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperList}>
        <h2 className={styles.title}>
          Shipping and payment
        </h2>

        <List>
          <img src={Delivery} alt="Delivery" />
          <ListItem>
            <ListItemText
              primary="1. Доставка курьером (по городу) 100$"
              secondary="На следующий день после оформления заказа"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Самовывоз - 0$"
              secondary="Пункт выдачи товаров: г. Днепр, ул. Калиновая 61, подъезд 1, офис 6"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. Новая почта - 50$"
              secondary="Доставка 3-5 рабочих дней"
            />
          </ListItem>
        </List>

        <List>
          <img src={Payment} alt="Payment" />
          <ListItem>
            <ListItemText primary="1. Наличный расчет при получении;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Безналичный расчет при получении;" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Оплата банковской картой в интернет-магазине;" />
          </ListItem>
        </List>
      </div>

      <div>
        <img src={SecDelivery} alt="plants" />
      </div>
    </div>
  );
}

export default SectionDelivery;

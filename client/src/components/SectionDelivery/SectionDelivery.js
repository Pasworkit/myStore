import { Box, Card, CardMedia } from '@mui/material';
import { useEffect, useState } from 'react';
import Delivery from '../../img/Delivery.svg';
import Payment from '../../img/Payment.svg';
import styles from './SectionDelivery.module.scss';
import PlantMob from '../../img/SectionDelivery/plant_mob.png';
import PlantTab from '../../img/SectionDelivery/plant_tab.png';

// import PlantWeb from '../../img/SectionDelivery/plant_web.png';

function SectionDelivery() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 1024 ? PlantTab : PlantMob;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className={styles.wrapper}>

      <Box className={styles.wrapper_list}>
        <div className={styles.wrapper_list__content}>
          <h2 className={styles.title}>
            Shipping and payment
          </h2>

          <div>
            <img className={styles.icon} src={Delivery} alt="Delivery" />
            <ul className={styles.list_delivery}>

              <li>
                1. Delivery by courier (in the city) 10$;
                <p>(The next day after placing an order)</p>
              </li>

              <li>
                2. Pickup - 0$;
                <p>
                  (Point of issue of goods: Dnipro, Yavornitsky Avenue 61)
                </p>
              </li>

              <li>
                3. Nova Poshta - 50$;
                <p>(Delivery 3-5 working days)</p>
              </li>
            </ul>
          </div>

          <div>
            <img className={styles.icon} src={Payment} alt="Payment" />

            <ul className={styles.list_payment}>
              <li>1. Cash upon receipt of the order;</li>
              <li>2. Cashless payment upon receipt of the order;</li>
              <li>3. Payment by credit card in the online store;</li>
            </ul>
          </div>
        </div>

      </Box>

      <Card>
        <CardMedia
          className={styles.img}
          component="img"
          height="762"
          alt="plants indoor"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </Card>

    </div>
  );
}

export default SectionDelivery;

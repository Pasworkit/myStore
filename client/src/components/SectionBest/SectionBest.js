import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from './SectionBest.module.scss';
import { products } from '../../img/products';

function SectionBest() {
  const settings = {
    dots: true,
    dotsClass: styles.ul,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>The best offers of the month</h2>
      <Slider {...settings}>
        {products.map((item) => (
          <Card sx={{ maxWidth: 292 }} className={styles.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.imgUrl}
                alt={item.productName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.productName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                IN CART
              </Button>
            </CardActions>
          </Card>

        ))}

      </Slider>
    </div>
  );
}
export default SectionBest;

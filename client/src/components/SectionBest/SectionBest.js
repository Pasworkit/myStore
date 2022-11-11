import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button, CardActionArea, CardActions,
} from '@mui/material';
import styles from './SectionBest.module.scss';
import { products } from '../../img/products';

function SectionBest() {
  const
    settings = {
      responsive: [
        {
          breakpoint: 630,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            rows: 3,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 920,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true,
            variableHeight: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            variableHeight: true,
          },
        },
        {
          breakpoint: 2000,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            variableHeight: true,
          },
        },
      ],
    };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>The best offers of the month</h2>
      <Slider {...settings}>
        {products.map((item) => (
          <Card
            key={item.id}
            sx={{ maxWidth: 292, height: 292 }}
            className={styles.card}
          >
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

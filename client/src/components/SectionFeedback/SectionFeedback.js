import {
  Avatar, Card, CardContent, CardHeader,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from 'react-slick';
import styles from './SectionFeedback.module.scss';
import { fetchComments } from '../../store/slices/commentsSlice';

function SectionFeedback() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comments.data);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const
    settings = {
      responsive: [
        {
          breakpoint: 630,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
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
          breakpoint: 1190,
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
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            variableHeight: true,
          },
        },
      ],
    };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Reviews about Home Decor</h2>
      <div className={styles.center}>
        <Slider {...settings}>
          {comments && comments.map(({
            content, customer: {
              firstName, lastName,
              avatarUrl,
            },
          }) => (
            <Card
              sx={{ maxWidth: 345 }}
              key={content}
            >
              <CardHeader
                avatar={(<Avatar alt="avatar" src={avatarUrl} />)}
                title={`${firstName} ${lastName}`}
              />

              <CardContent>{content}</CardContent>
              <div className={styles.margin} />
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SectionFeedback;

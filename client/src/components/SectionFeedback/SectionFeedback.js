import {
  Avatar, Card, CardContent, CardHeader, Container, Typography,
} from '@mui/material';
import styles from './SectionFeedback.module.scss';

function SectionFeedback() {
  return (
    <Container>
      <h2 className={styles.title}>Отзывы о Home Decor</h2>
      <div className={styles.wrapper}>

        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={(
              <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                R
              </Avatar>
            )}
            title="FIO"
            subheader="September 14, 2016"
          />
          <CardContent>
            <div>
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </div>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={(
              <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                R
              </Avatar>
            )}
            title="FIO"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={(
              <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
                R
              </Avatar>
            )}
            title="FIO"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook
              together with your guests. Add 1 cup of frozen peas along with the mussels,
              if you like.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>

  );
}

export default SectionFeedback;

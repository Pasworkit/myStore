import {
  Avatar, Card, CardContent, CardHeader,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './SectionFeedback.module.scss';
import { fetchComments } from '../../store/slices/commentsSlice';

function SectionFeedback() {
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comments.data);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <h2 className={styles.title}>Reviews about Home Decor</h2>
      <div className={styles.wrapper}>
        {comments && comments.map(({
          _id, content, customer: {
            firstName, lastName,
            avatarUrl,
          },

        }) => (
          <Card
            sx={{ maxWidth: 345 }}
            key={_id}
          >
            <CardHeader
              avatar={(
                <Avatar alt="avatar" src={avatarUrl} />
                )}
              title={`${firstName} ${lastName}`}
            />

            <CardContent>
              {content}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default SectionFeedback;

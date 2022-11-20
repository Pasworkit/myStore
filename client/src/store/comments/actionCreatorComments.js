import { GET_COMMENTS } from './actionsComments';
import { getComments } from '../../API/ApiTest';

export const getCommentsAC = () => async (dispatch) => {
  try {
    const { status, data } = await getComments();
    if (status === 200) {
      dispatch({ type: GET_COMMENTS, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};

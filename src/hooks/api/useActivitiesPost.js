import * as activitiesApi from '../../services/activitiesApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function insertSeat(activityId) {
  const token = useToken();

  const {
    data: seat,
    loading: seatLoading,
    error: seatError,
    act: postseat,
  } = useAsync(() => activitiesApi.postSeat(token, activityId));

  return {
    seat,
    seatLoading,
    seatError,
    postseat,
  };
}

import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/ticketApi';

export default function useAvailableSeats(activityId, dayId) {
  const token = useToken();
  
  const {
    data: availableSeats,
    loading: availableSeatsLoading,
    error: availableSeatsError,
    act: getAvailableSeats
  } = useAsync(() => activitiesApi.getAvailableSeats(token, activityId, dayId));

  return {
    availableSeats,
    availableSeatsLoading,
    availableSeatsError,
    getAvailableSeats
  };
}

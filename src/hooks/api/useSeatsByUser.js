import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activitiesApi';

export default function useSeatsByTicket() {
  const token = useToken();
  
  const {
    data: UserSeats,
    loading: UserSeatsLoading,
    error: UserSeatsError,
    act: getUserSeats
  } = useAsync(() => activitiesApi.getUserSeats(token));

  return {
    UserSeats,
    UserSeatsLoading,
    UserSeatsError,
    getUserSeats
  };
}

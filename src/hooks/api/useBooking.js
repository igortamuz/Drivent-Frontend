import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';
import useAsync from '../useAsync';

export default function useBooking(roomId) {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: getBooking,
  } = useAsync(() => bookingApi.getBooking(token));

  return {
    booking,
    bookingLoading,
    bookingError,
    getBooking,
  };
}

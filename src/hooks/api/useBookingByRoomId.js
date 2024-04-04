import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';
import useAsync from '../useAsync';

export default function useBookingByRoomId(roomId) {
  const token = useToken();

  const {
    data: booking,
    loading: bookingLoading,
    error: bookingError,
    act: getBookingByRoomId,
  } = useAsync(() => bookingApi.getBookingByRoomId(token, roomId));

  return {
    booking,
    bookingLoading,
    bookingError,
    getBookingByRoomId,
  };
}

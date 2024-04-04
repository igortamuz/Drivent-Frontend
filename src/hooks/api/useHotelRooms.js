
import useAsync from '../useAsync';

import * as roomApi from '../../services/roomApi';

export default function useHotelRooms(token, hotelId) {
  const {
    data: rooms,
    loading: RoomsLoading,
    error: RoomsError,
    act: getRooms,
  } = useAsync(() => roomApi.getHotelRooms(token, hotelId));

  return {
    rooms,
    RoomsLoading,
    RoomsError,
    getRooms,
  };
}

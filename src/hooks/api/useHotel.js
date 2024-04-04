
import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';

export default function useHotel(token) {
  const {
    data: hotel,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel
  } = useAsync(() => hotelApi.getHotelInfo(token));

  return {
    hotel,
    hotelLoading,
    hotelError,
    getHotel,
  };
}


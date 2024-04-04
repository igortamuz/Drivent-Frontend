import useToken from '../useToken';

import * as ticketsApi from '../../services/ticketApi';
import useAsync from '../useAsync';

export default function useTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket,
  } = useAsync(() => ticketsApi.getTicket(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket,
  };
}

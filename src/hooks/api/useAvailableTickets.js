import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketsApi from '../../services/ticketApi';

export default function useAvailableTickets() {
  const token = useToken();
  
  const {
    data: availableTickets,
    loading: availableTicketsLoading,
    error: availableTicketsError,
    act: getAvailableTickets
  } = useAsync(() => ticketsApi.getAvailableTickets(token));

  return {
    availableTickets,
    availableTicketsLoading,
    availableTicketsError,
    getAvailableTickets
  };
}

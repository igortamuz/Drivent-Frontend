import api from './api';

export async function saveTicket(enrollmentId, ticketTypeId, token) {
  const body = {
    'ticketTypeId': ticketTypeId,
    'enrollmentId': enrollmentId,
  };

  await api.post('/tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return  window.location.reload();
}

export async function getAvailableTickets(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ticketTypesWithoutHotel = [];
  const ticketTypesWithHotel = [];

  for (let i = 0; i < response.data.length; i++) {
    if (!response.data[i].includesHotel) {
      ticketTypesWithoutHotel.push(response.data[i]);
    }
    if (response.data[i].includesHotel) {
      ticketTypesWithHotel.push(response.data[i]);
    }
  }

  return { ticketTypesWithoutHotel, ticketTypesWithHotel };
}

export async function getTicket(token) {
  try {
    const response = await api.get('/tickets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;    
  } catch (error) {
    if (error.name === 'NotFoundError') {
      return null;
    }
  }
}
//

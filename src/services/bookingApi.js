import api from './api';

export async function getBooking(token) {
  try {
    const response = await api.get('/booking', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;    
  } catch (errors) {
    return null;
  }
}

export async function getBookingByRoomId(token, roomId) {
  const response = await api.get(`/booking/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function saveBooking(userId, roomId, token) {
  const body = {
    'userId': userId,
    'roomId': roomId,
  };
  
  await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return  window.location.reload();
}

export async function updateBooking(userId, roomId, bookingId, token) {
  const body = {
    'userId': userId,
    'roomId': roomId,
  };

  await api.put(`/booking/${bookingId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return  window.location.reload();
}

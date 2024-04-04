import api from './api';

export async function getActivitiesByDayId(token, dayId) {
  try {
    const response = await api.get(`/activities/day/${dayId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (errors) {
    return null;
  }
}

export async function postSeat(token, activityId) {
  const body = {
    'activityId': activityId
  };

  await api.post('/activities/subscription', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return  window.location.reload();
}

export async function getAvailableSeats(token, activityId, dayId) {
  const body = {
    'activityId': activityId,
    'dayId': dayId
  };
  try {
    const response = await api.get('/activities/seats/', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (errors) {
    return null;
  }
}

export async function getUserSeats(token) {
  try {
    const response = await api.get('/activities/seats/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (errors) {
    return null;
  }
}

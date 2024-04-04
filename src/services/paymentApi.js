import api from './api';

export async function createPayment(body, token) {
  await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return window.location.reload();
}

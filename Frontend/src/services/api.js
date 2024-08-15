import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const login = async (credentials) => {
  const response = await api.post('token/', credentials);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await api.post('signup/', credentials);
  return response.data;
};

export const logout = async () => {
  await api.post('logout/');
};

export default api;

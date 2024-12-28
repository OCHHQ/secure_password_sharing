import axios from 'axios';

export const API_URL = 'http://localhost:5000';

// Declare 'api' first
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export 'authAPI' after defining 'api'
export const authAPI = api;  // Now 'authAPI' will refer to the 'api' instance

// Add auth token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

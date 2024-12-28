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


// User API
export const createUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
};
// Update a user data
export const editUser = async (userId, userData) => {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    return response.data;
};
// Delete a user
export const deleteUser = async (userId) => {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    return response.data;
};

// Folder API
export const createFolder = async (folderData) => {
    const response = await axios.post(`${API_URL}/folders`, folderData);
    return response.data;
};
// Update a folder
export const editFolder = async (folderId, folderData) => {
    const response = await axios.put(`${API_URL}/folders/${folderId}`, folderData);
    return response.data;
};
// Delete a Folder
export const deleteFolder = async (folderId) => {
    const response = await axios.delete(`${API_URL}/folders/${folderId}`);
    return response.data;
};

// Vault API
export const createVault = async (vaultData) => {
    const response = await axios.post(`${API_URL}/vaults`, vaultData);
    return response.data;
};
// Update a vault
export const editVault = async (vaultId, vaultData) => {
    const response = await axios.put(`${API_URL}/vaults/${vaultId}`, vaultData);
    return response.data;
};

// Deletes a vault.
export const deleteVault = async (vaultId) => {
    const response = await axios.delete(`${API_URL}/vaults/${vaultId}`);
    return response.data;
};

// Auth API
export const loginCheck = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
};

// Check if the email already exists in the database
export const checkEmailExists = async (email) => {
    const response = await axios.post(`${API_URL}/auth/check-email`, { email });
    return response.data;
};
// Registers a new user
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const logoutUser = async () => {
    const response = await axios.post(`${API_URL}/auth/logout`);
    return response.data;
}

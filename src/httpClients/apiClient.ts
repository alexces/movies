import axios from 'axios';

const apiClient = axios.create({
    timeout: 20000,
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default apiClient;

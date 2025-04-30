import axios from 'axios';

const baseURL = import.meta.env.VITE_URL || 'https://devapp2025-backend-production-f74f.up.railway.app';

console.log(baseURL);

const apiClient = axios.create({
    baseURL: baseURL
});

export default apiClient;

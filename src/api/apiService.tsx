import axios from 'axios';

const baseURL = 'https://devapp2025-backend-production-f74f.up.railway.app';

const apiClient = axios.create({
    baseURL: baseURL
});

export default apiClient;

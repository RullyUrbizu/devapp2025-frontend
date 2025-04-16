import axios from 'axios';

const baseURL = 'http://localhost:3000';

const apiClient = axios.create({
    baseURL: baseURL
});

export default apiClient;

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    json: true
});

export default api;
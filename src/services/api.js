import axios from 'axios';
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("marvel-token")}` }
};
const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    config,
    headers: { Authorization: `Bearer ${localStorage.getItem("marvel-token")}` }
});

export default api;

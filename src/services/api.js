import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: { Authorization: `Bearer ${localStorage.getItem("marvel-token")}` }
});


export default api
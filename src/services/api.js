import axios from 'axios';

const api = axios.create({
    baseURL: 'https://marvel-app-stone-case.herokuapp.com/api',
    headers: { Authorization: `Bearer ${localStorage.getItem("marvel-token")}` }
});


export default api
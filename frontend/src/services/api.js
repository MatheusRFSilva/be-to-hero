import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333',
    baseURL: 'http://31.220.48.30:3333',
})

export default api;
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.102.2:8000'
});

export default api;
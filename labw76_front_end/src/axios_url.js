import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3049'
});

export default instance;
import axios from 'axios';

const server_url = 'http://localhost:3333';

const api = axios.create({
  baseURL: server_url
});

export default api;
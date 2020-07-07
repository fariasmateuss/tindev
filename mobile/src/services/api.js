/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

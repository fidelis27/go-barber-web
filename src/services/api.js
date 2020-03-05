import axios from 'axios';
import 'dotenv/config';
const api = axios.create({
  baseURL: 'https://localhost:3333' ,
});

export default api;

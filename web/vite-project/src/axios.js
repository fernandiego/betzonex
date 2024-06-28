// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Adjust to match your backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});


export default instance;

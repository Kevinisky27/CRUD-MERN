import axios from 'axios';

const baseURL = process.env.PUBLIC_URL;

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
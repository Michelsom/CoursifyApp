import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://blog.coursify.me/wp-json/wp/v2/',
});

import axiosFetch from 'axios';

const axios = axiosFetch.create({
  baseURL: 'http://localhost:3001/api',
});

export default axios;

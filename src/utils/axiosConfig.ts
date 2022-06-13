import axios from 'axios';

const axiosDefaultInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN_SERVERLESS,
});

export { axiosDefaultInstance };

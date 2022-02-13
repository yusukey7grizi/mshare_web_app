import axios from 'axios';

const axiosDefaultInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STAGE == 'dev'
      ? process.env.NEXT_PUBLIC_API_DOMAIN_DEV
      : process.env.NEXT_PUBLIC_API_DOMAIN_PROD,
});

export { axiosDefaultInstance };

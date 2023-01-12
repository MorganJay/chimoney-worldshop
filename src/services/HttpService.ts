import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL + '/v0.2';
axios.defaults.headers.common['X-API-KEY'] = import.meta.env.VITE_APP_API_KEY;

axios.interceptors.response.use(null, (error: AxiosError) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error(error);
    toast.error('An unexpected error occurred.');
  }
  const errorMessage = error.message ?? 'An unexpected error occurred.';
  console.error(errorMessage);
  toast.error(
    'There seems to be a problem loading our gift cards, please try again later',
    { duration: 5000 }
  );
  return Promise.reject(error);
});

export const expectedError = (error: AxiosError, statusCode: number) =>
  error.response && error.response.status === statusCode;

export const apiError = (status: string) => status !== 'success';

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  expectedError,
  apiError,
};

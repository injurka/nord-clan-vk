import axios from 'axios';
import { DocsApi } from './docs';

interface ApiReturnType {
  docs: ReturnType<typeof DocsApi>;
}

export const api = () => {
  const instance = axios.create({
    baseURL: 'https://api.vk.com/method/',
    withCredentials: true
  });
  const apis = {
    docs: DocsApi
  };

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance)
    };
  }, {} as ApiReturnType);

  return result;
};

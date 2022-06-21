import axios from 'axios';
import { getCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';
import { DocsApi } from './docs';

interface ApiReturnType {
  docs: ReturnType<typeof DocsApi>;
}

export const api = (cookies?: OptionsType | undefined) => {
  const instance = axios.create({
    baseURL: 'https://api.vk.com/method/',
    params: {
      v: '5.131',
      access_token: getCookie('__ACCESS_TOKEN__', cookies)
    }
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

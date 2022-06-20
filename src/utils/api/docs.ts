import type { AxiosInstance } from 'axios';

interface GetPaylod {
  access_token: string;
  count?: number;
  offset?: number;
  type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  owner_id?: number;
}

export interface DocsItem {
  id: number;
  owner_id: number;
  title: string;
  size: number;
  ext: string;
  url: string;
  date: number;
  type: number;
  preview: {
    photo: {
      sizes: [
        {
          src: string;
          width: number;
          height: number;
          type: string;
        }
      ];
    };
    graffiti: {
      src: string;
      width: number;
      height: number;
    };
  };
}

interface DocsResponse {
  response: {
    count: number;
    items: DocsItem[];
  };
}

///                                                                                 //

export const DocsApi = (instance: AxiosInstance) => ({
  async get(payload: GetPaylod) {
    const { data } = await instance.get<DocsResponse>('/docs.get', { params: { ...payload } });

    return data.response;
  }
});

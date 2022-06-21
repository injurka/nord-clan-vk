import type { DocsItem } from '#/store/slices/docs.slice';
import type { AxiosInstance } from 'axios';

interface GetPaylod {
  count?: number;
  offset?: number;
  type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  owner_id?: number;
}

interface DeletePaylod {
  id: number;
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
  },

  async delete(payload: DeletePaylod) {
    const { data } = await instance.delete<DocsResponse>('/docs.delete', {
      params: { ...payload }
    });

    return data.response;
  }
});

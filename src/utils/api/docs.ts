import type { DocsItem } from '#/store/slices/docs.slice';
import type { AxiosInstance } from 'axios';

interface GetPaylod {
  count?: number;
  offset?: number;
  type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  owner_id?: number;
}

interface DeletePaylod {
  owner_id: number;
  doc_id: number;
}

interface DocsResponse {
  count: number;
  items: DocsItem[];
}

///                                                                                 //
export const DocsApi = (instance: AxiosInstance) => ({
  async get(payload: GetPaylod) {
    const { data } = await instance.get<DocsResponse>('/get-docs', { params: { ...payload } });

    return data.items;
  },

  async delete(payload: DeletePaylod) {
    const { data } = await instance.get<DocsResponse>('/delete-docs', {
      params: { ...payload }
    });

    return data.items;
  }
});

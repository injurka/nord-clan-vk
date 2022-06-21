import { ApiStatus } from '#/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface FileImage {
  src: string;
  width: number;
  height: number;
  type: string;
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
      sizes: FileImage[];
    };
    graffiti: Omit<FileImage, 'type'>;
  };
}

export interface DocsState {
  status: ApiStatus;
  docs: DocsItem[];
  isOpenImage: boolean;
  selectedImage: string;
}

const initialState: DocsState = {
  status: ApiStatus.NONE,
  docs: [],

  isOpenImage: false,
  selectedImage: ''
};

//* - Slice ------------------------------------------------------------------------------------------//
const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    reset: () => initialState,
    loadDocs: (state: DocsState, { payload }: PayloadAction<DocsItem[]>) => {
      state.status = ApiStatus.FULFILLED;
      state.docs = payload;
    },
    removeDoc: (state: DocsState, { payload }: PayloadAction<DocsItem>) => {
      state.docs = state.docs.filter((x) => x.id !== payload.id);
    },
    toggleVisibleImage: (state: DocsState, { payload }: PayloadAction<boolean>) => {
      state.isOpenImage = payload;
    },
    setSelectedImage: (state: DocsState, { payload }: PayloadAction<string>) => {
      state.selectedImage = payload;
    }
  }
});

export const { loadDocs } = docsSlice.actions;
export default docsSlice;

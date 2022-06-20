import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  theme: 'light' | 'dark' | 'blue';
}

const initialState: AppState = {
  theme: 'light'
};

//* - Slice ------------------------------------------------------------------------------------------//
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: () => initialState,
    switchTheme: (state: AppState, { payload }: PayloadAction<'light' | 'dark' | 'blue'>) => {
      state.theme = payload;
    }
  }
});

export const { switchTheme } = appSlice.actions;
export default appSlice;

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { setCookies, removeCookies } from 'cookies-next';

export interface UserState {
  isAuth: boolean;
  accessToken: string;
}

const initialState: UserState = {
  isAuth: false,
  accessToken: ''
};

//* - Slice ------------------------------------------------------------------------------------------//
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
    auth: (state: UserState, { payload }: PayloadAction<string>) => {
      state.isAuth = true;
      state.accessToken = payload;
      setCookies('__ACCESS_TOKEN__', payload);
    },
    logout: (state: UserState) => {
      state.isAuth = false;
      state.accessToken = '';
      removeCookies('__ACCESS_TOKEN__');
    }
  }
});

export const { auth, logout } = userSlice.actions;
export default userSlice;

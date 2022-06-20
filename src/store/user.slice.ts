import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
    authUser: (state: UserState, { payload }: PayloadAction<string>) => {
      state.isAuth = true;
      state.accessToken = payload;
    }
  }
});

export const { authUser } = userSlice.actions;
export default userSlice;

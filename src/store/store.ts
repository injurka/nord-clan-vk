import type { ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import type { AppState } from './slices/app.slice';
import type { UserState } from './slices/user.slice';
import type { DocsState } from './slices/docs.slice';

import appSlice from './slices/app.slice';
import userSlice from './slices/user.slice';
import docsSlice from './slices/docs.slice';

const devMode = process.env.NODE_ENV !== 'production';

interface IState {
  app: AppState;
  user: UserState;
  docs: DocsState;
}

const rootReducer = (state: IState | undefined, action: AnyAction) => {
  // if (action.type === HYDRATE) {
  //   return {
  //     ...state,
  //     ...action.payload
  //   };
  // }
  return combineReducers({
    [appSlice.name]: appSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [docsSlice.name]: docsSlice.reducer
  })(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: devMode
});

const setupStore = () => store;
const makeStore = () => setupStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type RootDispatch = typeof store.dispatch;
export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore, { debug: devMode });

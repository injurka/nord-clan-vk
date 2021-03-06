import ActionCreatorsApp from '#/store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTypesSelector } from '../useTypesSelector';

// User Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useUser = () => {
  const dispatch = useDispatch();
  const { reset, auth, logout } = bindActionCreators(ActionCreatorsApp.actions, dispatch);
  const { accessToken, isAuth } = useTypesSelector((state) => state.user);

  return { reset, auth, logout, accessToken, isAuth };
};

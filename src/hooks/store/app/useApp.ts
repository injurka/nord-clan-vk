import ActionCreatorsApp from '#/store/slices/app.slice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTypesSelector } from '../useTypesSelector';

// Application Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useApp = () => {
  const dispatch = useDispatch();
  const { switchTheme } = bindActionCreators(ActionCreatorsApp.actions, dispatch);

  const { theme } = useTypesSelector((state) => state.app);

  return { switchTheme, theme };
};

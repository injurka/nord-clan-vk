import type { ThemeValue } from '#/contexts/theme';
import { ThemeContext } from '#/contexts/theme';
import { useContext } from 'react';

const useTheme = (): ThemeValue => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('Missing ThemeContext');
  }

  return theme;
};

export default useTheme;

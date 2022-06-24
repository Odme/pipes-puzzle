import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

interface PipesThemeProviderProps {
  children: ReactNode;
}

export const PipesThemeProvider: FC<PipesThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

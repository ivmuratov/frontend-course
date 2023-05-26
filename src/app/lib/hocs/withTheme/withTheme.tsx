import { ComponentType } from 'react';
import { useJsonSettings } from '@/entities/User';
import { ThemeProvider } from '../../../providers/ThemeProvider';

export const withTheme = (Component: ComponentType) => () => {
  const { theme } = useJsonSettings();

  return (
    <ThemeProvider initialTheme={theme}>
      <Component />
    </ThemeProvider>
  );
};

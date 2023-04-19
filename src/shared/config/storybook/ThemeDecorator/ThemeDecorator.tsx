import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export default (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);

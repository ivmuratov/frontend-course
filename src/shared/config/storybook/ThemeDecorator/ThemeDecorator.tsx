import { Story } from '@storybook/react';
// eslint-disable-next-line fsd-imuratov/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export default (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );

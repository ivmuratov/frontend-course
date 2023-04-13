import { Suspense } from 'react';
import { Story } from '@storybook/react';

export default (StoryComponent: Story) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
);

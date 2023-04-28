import { Story } from '@storybook/react';

export default (StoryComponent: Story) => (
  <div style={{ display: 'flex' }}>
    <StoryComponent />
  </div>
);

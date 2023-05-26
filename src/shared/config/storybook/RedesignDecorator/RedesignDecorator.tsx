import { Story } from '@storybook/react';
import { setFeaturesFlags, getAllFeatureFlags } from '@/shared/features';

export default (StoryComponent: Story) => {
  setFeaturesFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

  return (
    <div className='app_redesigned'>
      <StoryComponent />
    </div>
  );
};

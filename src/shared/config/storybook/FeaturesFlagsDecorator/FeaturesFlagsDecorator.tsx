import { Story } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeaturesFlags } from '@/shared/features';

export default (features: FeatureFlags) => (StoryComponent: Story) => {
  setFeaturesFlags(features);

  return <StoryComponent />;
};

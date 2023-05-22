import { FC, ReactElement } from 'react';
import { getFeatureFlag } from '../../lib/setGetFeatures/setGetFeatures';
import { FeatureFlags } from '../../../types/featureFlags';

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures: FC<ToggleFeaturesProps> = ({ feature, on, off }) => {
  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};

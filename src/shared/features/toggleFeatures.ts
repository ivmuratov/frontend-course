import { FeatureFlags } from '../types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export const toggleFeatures = <T>({ off, on, name }: ToggleFeaturesOptions<T>): T => {
  if (getFeatureFlag(name)) {
    return on();
  }

  return off();
};

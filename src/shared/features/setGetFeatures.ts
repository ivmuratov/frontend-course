import { FeatureFlags } from '../types/featureFlags';

let featureFlags: FeatureFlags;

export const setFeaturesFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => featureFlags[flag];

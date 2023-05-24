import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeaturesFlags } from '../lib/setGetFeatures/setGetFeatures';

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<void, UpdateFeatureFlagOptions, ThunkConfig<string>>(
  'features/updateFeatureFlags',
  async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const allFeatures = {
      ...getAllFeatureFlags(),
      ...newFeatures,
    };

    try {
      await dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: allFeatures,
        }),
      );

      setFeaturesFlags(allFeatures);
      window.location.reload();
      return undefined;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);

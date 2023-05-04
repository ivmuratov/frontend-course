import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('articleDetails', () => {
  it('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  it('should isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});

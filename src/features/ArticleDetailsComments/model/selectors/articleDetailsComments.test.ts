import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsCommentsError,
} from './articleDetailsComments';

describe('articleDetailsCommentsSelectors', () => {
  it('should loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema))
      .toEqual(true);
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema))
      .toEqual(undefined);
  });

  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    };
    expect(getArticleDetailsCommentsError(state as StateSchema))
      .toEqual('error');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsCommentsError(state as StateSchema))
      .toEqual(undefined);
  });
});

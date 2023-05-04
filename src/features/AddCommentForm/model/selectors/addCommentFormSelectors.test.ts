import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('addCommentFormSelectors', () => {
  it('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'text',
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual('');
  });

  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
  });
  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});

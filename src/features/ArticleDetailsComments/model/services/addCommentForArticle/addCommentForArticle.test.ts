import { Comment } from 'entities/Comment';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data: Comment = {
  id: '1',
  user: { id: '1', username: 'vasya' },
  text: 'qwerty',
};

describe('addCommentForArticle', () => {
  it('success', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('');

    /*     expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data); */
  });

  it('error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('qwerty');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});

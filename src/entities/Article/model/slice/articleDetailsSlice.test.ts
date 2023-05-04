import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/article';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
  id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: '',
  views: 0,
  createdAt: '',
  type: [],
  blocks: [],
  user: {
    id: '1',
    username: 'ulbi tv',
  },
};

describe('articleDetailsSlice', () => {
  it('service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
      isLoading: true,
    });
  });

  it('service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      data: {},
      isLoading: true,
    };

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data, '1', ''))).toEqual({
      data,
      isLoading: false,
    });
  });
});

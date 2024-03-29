import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface CreateArticleRateArg extends GetArticleRatingArg {
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    createArticleRate: build.mutation<void, CreateArticleRateArg>({
      query: arg => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery: useArticleRating } = articleRatingApi;
export const { useCreateArticleRateMutation: useCreateArticleRate } = articleRatingApi;

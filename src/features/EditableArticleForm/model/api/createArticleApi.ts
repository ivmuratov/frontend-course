import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleType, ArticleBlock } from '@/entities/Article';

interface CreateArticleArg {
  userId: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

const createArticelApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    createArticle: build.mutation<void, CreateArticleArg>({
      query: arg => ({
        url: '/articles',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useCreateArticle = createArticelApi.useCreateArticleMutation;

import { ArticleType, ArticleBlock } from '@/entities/Article';

export interface CreateArticleForm {
  userId?: string;
  title: string;
  subtitle: string;
  img: string;
  views?: number;
  createdAt?: string;
  checkTypeIT: boolean;
  checkTypeScience: boolean;
  checkTypeEconomics: boolean;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface CreateArticleFormSchema {
  form: CreateArticleForm;
  error?: string;
  isLoading: boolean;
}

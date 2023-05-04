import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text';
import { getArticlesPageIsLoading, getArticlesPageError, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);

  const error = useSelector(getArticlesPageError);

  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text theme={TextTheme.ERROR} title={t('an unexpected error occurred')} />;
  }

  return <ArticleList className={classNames('', {}, [className])} isLoading={isLoading} view={view} articles={articles} />;
});

import {
  memo,
} from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
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

  const mods: Mods = {};

  if (error) {
    return (
      <Text
        theme={TextTheme.ERROR}
        title={t('an unexpected error occurred')}
      />
    );
  }

  return (
    <ArticleList
      className={classNames('', mods, [className])}
      isLoading={isLoading}
      view={view}
      articles={articles}
    />
  );
});

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFilterProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);

  const order = useSelector(getArticlesPageOrder);

  const sort = useSelector(getArticlesPageSort);

  const type = useSelector(getArticlesPageType);

  const search = useSelector(getArticlesPageSearch);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const mods: Mods = {};

  return (
    <div className={classNames(cls.ArticlesPageFilter, mods, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input value={search} onChange={onChangeSearch} placeholder={t('search')} />
      </Card>
      <ArticleTypeTabs className={cls.tabs} value={type} onChangeType={onChangeType} />
    </div>
  );
});

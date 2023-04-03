import {
  FC,
  memo,
  useCallback,
  useEffect,
} from 'react';
import {
  ArticleList,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);

  const error = useSelector(getArticlesPageError);

  const view = useSelector(getArticlesPageView);

  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initArticlesPage(searchParams));
    }
  }, [dispatch, searchParams, view]);

  const mods: Mods = {};

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ArticlesPage, mods, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={cls.list}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);

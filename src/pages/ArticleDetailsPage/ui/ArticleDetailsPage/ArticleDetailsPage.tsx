import { FC, useEffect } from 'react';
import {
  ArticleDetails,
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
  const mods: Mods = {};

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const data = useSelector(getArticleDetailsData);

  const isLoading = useSelector(getArticleDetailsIsLoading);

  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticlesDetailsPage, mods, [className])}>
        <ArticleDetails
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </DynamicModuleLoader>
  );
};

// некорректно работает HoC, сначала грузится thunk, потом инициализируется стейт.
// в связи с этим теряется isLoading, и не возможно отобразить скелетоны
/* export default withDynamicModuleLoader(ArticleDetailsPage, reducers, true); */

export default ArticleDetailsPage;

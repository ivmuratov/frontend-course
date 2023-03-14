import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReducersList, withDynamicModuleLoader } from 'shared/lib/hocs/withDynamicModuleLoader/withDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const mods: Mods = {};

  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const data = useSelector(getArticleDetailsData);

  const isLoading = true;

  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content: JSX.Element;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('an error occurred while loading the article')}
      />
    );
  } else {
    content = (
      <>
        {t('article details page')}
      </>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetails, mods, [className])}>
      {content}
    </div>
  );
};

export default withDynamicModuleLoader(memo(ArticleDetails), reducers, true);

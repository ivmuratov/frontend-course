import {
  FC, memo, useCallback, useEffect,
} from 'react';
import {
  ArticleDetails,
  articleDetailsReducer,
  ArticleList,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import {
  fetchArticleCommentsById,
  getArticleDetailsComments,
  getArticleDetailsRecommendations,
  addCommentForArticle,
  getArticleDetailsCommentsIsLoading,
  getArticleDetailsRecommendationsIsLoading,
  fetchArticleRecommendations,
  articleDetailsIndexReducer,
} from 'features/ArticleDetailsComments';
import { AddCommentForm } from 'features/AddCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  articleDetailsIndex: articleDetailsIndexReducer,
};

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticlesDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const data = useSelector(getArticleDetailsData);

  const isLoading = useSelector(getArticleDetailsIsLoading);

  const error = useSelector(getArticleDetailsError);

  const comments = useSelector(getArticleDetailsComments.selectAll);

  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const recommendations = useSelector(getArticleDetailsRecommendations.selectAll);

  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleRecommendations());
    }
  }, [dispatch]);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleCommentsById(id));
    }
  }, [dispatch, id]);

  const mods: Mods = {};

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlesDetailsPage, mods, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails
          data={data}
          isLoading={isLoading}
          error={error}
        />
        <Text
          className={cls.commentTitle}
          size={TextSize.L}
          title={t('recommended')}
        />
        <ArticleList
          className={cls.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target="_blank"
        />
        <Text
          className={cls.commentTitle}
          size={TextSize.L}
          title={t('comments')}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

// некорректно работает HoC, сначала грузится thunk, потом инициализируется стейт.
// в связи с этим теряется isLoading, и невозможно отобразить скелетоны
/* export default withDynamicModuleLoader(ArticleDetailsPage, reducers, true); */

export default memo(ArticleDetailsPage);

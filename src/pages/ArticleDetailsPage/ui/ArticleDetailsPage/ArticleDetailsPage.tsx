import {
  FC, memo, useCallback, useEffect,
} from 'react';
import {
  ArticleDetails,
  articleDetailsReducer,
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
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import {
  articleDetailsCommentsReducer,
  fetchArticleCommentsById,
  getArticleDetailsComments,
  addCommentForArticle,
} from 'features/ArticleDetailsComments';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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

  const commentsIsLoading = useSelector(getArticleDetailsIsLoading);

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
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleCommentsById(id));
    }
  }, [dispatch, id]);

  const mods: Mods = {};

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlesDetailsPage, mods, [className])}>
        <Button
          onClick={onBackToList}
          theme={ButtonTheme.OUTLINE}
        >
          {t('back to list')}
        </Button>
        <ArticleDetails
          data={data}
          isLoading={isLoading}
          error={error}
        />
        <Text
          className={cls.commentTitle}
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

import {
  memo,
  useCallback,
  useEffect,
} from 'react';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import {
  addCommentForArticle,
  fetchArticleCommentsById,
  getArticleDetailsComments,
  getArticleDetailsCommentsIsLoading,
} from 'features/ArticleDetailsComments';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(({
  className,
  id,
}: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);

  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleCommentsById(id));
    }
  }, [dispatch, id]);

  const mods: Mods = {};

  return (
    <VStack
      className={classNames('', mods, [className])}
      gap="16"
      max
    >
      <Text
        size={TextSize.L}
        title={t('comments')}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  );
});

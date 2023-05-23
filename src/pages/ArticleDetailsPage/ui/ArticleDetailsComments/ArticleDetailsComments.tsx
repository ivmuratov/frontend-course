import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import {
  addCommentForArticle,
  fetchArticleCommentsById,
  getArticleDetailsComments,
  getArticleDetailsCommentsIsLoading,
} from '@/features/ArticleDetailsComments';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextSize, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/features';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleDetailsComments.selectAll);

  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleCommentsById(id));
    }
  }, [dispatch, id]);

  return (
    <VStack className={classNames('', {}, [className])} gap='16' max>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Text size='l' title={t('comments')} />}
        off={<TextDeprecated size={TextSize.L} title={t('comments')} />}
      />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  );
});

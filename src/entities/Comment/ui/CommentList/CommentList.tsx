import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { ToggleFeatures } from '@/shared/features';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack className={classNames('', {}, [className])} gap='16' max>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack className={classNames('', {}, [className])} gap='16' max>
      {comments?.length ? (
        comments.map(comment => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />)
      ) : (
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text text={t('no comments')} />}
          off={<TextDeprecated text={t('no comments')} />}
        />
      )}
    </VStack>
  );
});

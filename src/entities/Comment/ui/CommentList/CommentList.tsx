import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const mods: Mods = {};

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack className={classNames('', mods, [className])} gap='16' max>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack className={classNames('', mods, [className])} gap='16' max>
      {comments?.length ? (
        comments.map(comment => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />)
      ) : (
        <Text text={t('no comments')} />
      )}
    </VStack>
  );
});

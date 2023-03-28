import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({
  className,
  comments,
  isLoading,
}: CommentListProps) => {
  const mods: Mods = {};

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, mods, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, mods, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
          />
        ))
        : <Text text={t('no comments')} />}
    </div>
  );
});

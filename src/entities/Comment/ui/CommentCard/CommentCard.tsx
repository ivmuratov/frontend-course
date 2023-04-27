import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({
  className,
  comment,
  isLoading,
}: CommentCardProps) => {
  if (isLoading) {
    return (
      <VStack
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
        gap="8"
        max
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      className={classNames(cls.CommentCard, {}, [className])}
      gap="8"
      max
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar && <Avatar src={comment.user.avatar} size={30} />}
        <Text
          className={cls.username}
          title={comment.user.username}
        />
      </AppLink>
      <Text
        className={cls.text}
        text={comment.text}
      />
    </VStack>
  );
});

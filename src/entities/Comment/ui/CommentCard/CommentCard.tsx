import { memo } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
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
  const mods: Mods = {};

  if (isLoading) {
    return (
      <VStack
        className={classNames(cls.CommentCard, mods, [className, cls.loading])}
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
      className={classNames(cls.CommentCard, mods, [className])}
      gap="8"
      max
    >
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
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

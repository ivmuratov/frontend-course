import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack data-testid='CommentCard.Loading' className={classNames(cls.CommentCard, {}, [className, cls.loading])} gap='8' max>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton className={cls.username} height={16} width={100} />
        </div>
        <Skeleton className={cls.text} width='100%' height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card padding='24' border='round' max>
          <VStack
            data-testid='CommentCard.Content'
            className={classNames(cls.CommentCardRedesigned, {}, [className])}
            gap='8'
            max
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap='8'>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text text={comment.user.username} bold />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack data-testid='CommentCard.Content' className={classNames(cls.CommentCard, {}, [className])} gap='8' max>
          <AppLinkDeprecated to={getRouteProfile(comment.user.id)} className={cls.header}>
            {comment.user.avatar && <AvatarDeprecated src={comment.user.avatar} size={30} />}
            <TextDeprecated className={cls.username} title={comment.user.username} />
          </AppLinkDeprecated>
          <TextDeprecated className={cls.text} text={comment.text} />
        </VStack>
      }
    />
  );
});

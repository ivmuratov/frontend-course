import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { toggleFeatures } from '@/shared/features';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { data: notifications, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack className={classNames(cls.NotificationList, {}, [className])} gap='16' max>
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
        <Skeleton width='100%' border='8px' height='80px' />
      </VStack>
    );
  }

  return (
    <VStack className={classNames(cls.NotificationList, {}, [className])} gap='16' max>
      {notifications?.map(item => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});

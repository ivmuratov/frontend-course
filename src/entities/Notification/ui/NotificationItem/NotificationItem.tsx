import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
  const content: JSX.Element = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <CardDeprecated className={classNames(cls.NotificationItem, {}, [className])} theme={CardTheme.OUTLINED}>
          <TextDeprecated title={item.title} text={item.description} />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <a className={cls.link} href={item.href} rel='noreferrer' target='_blank'>
        {content}
      </a>
    );
  }

  return content;
});

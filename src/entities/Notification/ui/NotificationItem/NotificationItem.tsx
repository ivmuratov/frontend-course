import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(({
  className,
  item,
}: NotificationItemProps) => {
  const mods: Mods = {};

  const content: JSX.Element = (
    <Card
      className={classNames(cls.NotificationItem, mods, [className])}
      theme={CardTheme.OUTLINED}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a
        className={cls.link}
        href={item.href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return content;
});

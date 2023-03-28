import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
  ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({
  className,
  view,
}: ArticleListItemSkeletonProps) => {
  const mods: Mods = {};

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton className={cls.username} height={16} width={150} />
            <Skeleton className={cls.date} height={16} width={150} />
          </div>
          <Skeleton className={cls.title} width={250} height={24} />
          <Skeleton className={cls.img} height={200} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, mods, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.img} width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton className={cls.title} width={150} height={16} />
      </Card>
    </div>
  );
});

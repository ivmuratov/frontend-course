import { CSSProperties, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo(({ className, height, width, border }: SkeletonProps) => {
  const mods: Mods = {};

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(cls.Skeleton, mods, [className])} style={styles} />;
});

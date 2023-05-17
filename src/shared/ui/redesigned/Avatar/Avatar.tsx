import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import UserIcon from '@/shared/assets/icons/avatar.svg';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, src, size = 100, alt }) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const fallback = <Skeleton width={size} height={size} border='50%' />;

  const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

  return (
    <AppImage
      className={classNames(cls.Avatar, {}, [className])}
      fallback={fallback}
      errorFallback={errorFallback}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};

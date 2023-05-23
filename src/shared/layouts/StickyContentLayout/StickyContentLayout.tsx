import { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = memo(({ className, left, content, right }: StickyContentLayoutProps) => (
  <div className={classNames(cls.MainLayout, {}, [className])}>
    {left && <div className={cls.left}>{left}</div>}
    <div className={cls.content}>{content}</div>
    {right && <div className={cls.right}>{right}</div>}
  </div>
));

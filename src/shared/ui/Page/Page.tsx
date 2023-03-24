import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({
  className,
  children,
  onScrollEnd,
}: PageProps) => {
  const mods: Mods = {};

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      className={classNames(cls.Page, mods, [className])}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});

import { StateSchema } from 'app/providers/StoreProvider';
import {
  getScrollByPath,
  scrollSaveActions,
} from 'features/ScrollSave';
import {
  memo,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(({
  className,
  children,
  onScrollEnd,
}: PageProps) => {
  const mods: Mods = {};

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section
      className={classNames(cls.Page, mods, [className])}
      ref={wrapperRef}
      onScroll={onScrollHandler}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} /> }
    </section>
  );
});

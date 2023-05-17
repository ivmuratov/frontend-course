import { MutableRefObject, useEffect } from 'react';

export interface UseInterfaceScrollOptions {
  callback?: () => void;
  wrapperRef?: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInterfaceScrollOptions) => {
  useEffect(() => {
    const wrapperElement = wrapperRef?.current || null;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};

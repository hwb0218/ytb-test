import {
  RefObject, useCallback, useEffect,
} from 'react';
import { throttle } from 'lodash';

type UseInfiniteScroll = {
  ref?: RefObject<HTMLElement> | null;
  loadMoreVideos: () => void;
}

export function useInfiniteScroll({
  ref, loadMoreVideos,
}: UseInfiniteScroll) {
  const target = ref?.current ?? window;

  const handleScroll = throttle(() => {
    const isWindow = target instanceof Window;
    const scrollHeight = isWindow ? document.documentElement.scrollHeight : target.scrollHeight;
    const scrollTop = isWindow ? window.scrollY : target.scrollTop;
    const clientHeight = isWindow ? window.innerHeight : target.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      loadMoreVideos();
    }
  }, 500);

  const memoizedHandleScroll = useCallback(handleScroll, [handleScroll]);

  useEffect(() => {
    target.addEventListener('scroll', memoizedHandleScroll);

    return () => {
      target.removeEventListener('scroll', memoizedHandleScroll);
    };
  }, [target, memoizedHandleScroll]);
}

interface UseIntersectionObserver {
  ref: RefObject<HTMLDivElement>;
  threshold?: number;
  loadMoreVideos: () => void;
}

export function useIntersectionObserver({
  ref, loadMoreVideos, threshold = 0.1,
}: UseIntersectionObserver) {
  const observerCallback: IntersectionObserverCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMoreVideos();
      }
    });
  }, [loadMoreVideos]);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observerCallback, threshold]);
}

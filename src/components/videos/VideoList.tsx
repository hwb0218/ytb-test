import { useRef } from 'react';

import { useInfiniteQueryFetchVideos } from '../../hooks/videos';
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll';

import Video from '.';

export default function VideoList() {
  const {
    videos,
    hasNextPage,
    isFetchingNextPage,
    loadMoreVideos,
  } = useInfiniteQueryFetchVideos();

  const observerRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({ ref: observerRef, loadMoreVideos });
  // useInfiniteScroll({ loadMoreVideos });

  return (
    <Video className="grid gap-2 grid-cols-videosAutofill">
      {videos.map((video) => (
        <Video.item key={`${video.id.videoId}-${video.etag}`} className="h-[300px]">
          {video.snippet.title}
        </Video.item>
      ))}
      {hasNextPage && Array
        .from({ length: 4 }, (v, i) => i)
        .map((item) => <Video.item key={item}>스켈레톤</Video.item>)}
      <div className="text-blue-600 col-span-full m-auto">
        {hasNextPage && isFetchingNextPage && '로딩 중...'}
      </div>
      <div ref={observerRef} className="h-4" data-set="observer" />
    </Video>
  );
}

// TODO: 스켈레톤 ui 적용
// TODO: 에러 바운더리
// TODO: zustand

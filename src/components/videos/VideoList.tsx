import { useRef } from 'react';

import Video from '.';

import { useInfiniteQueryFetchVideos } from '../../hooks/videos';

export default function VideoList() {
  // const { videos, loadMoreVideos } = useFetchVideos();
  const { videos, loadMoreVideos } = useInfiniteQueryFetchVideos();

  const container = useRef<HTMLUListElement>(null);

  return (
    <Video ref={container} className="grid gap-2 grid-cols-videosAutofill">
      {videos.map((video) => (
        <Video.item key={`${video.id.videoId}-${video.etag}`}>
          {video.snippet.title}
        </Video.item>
      ))}
      <button type="button" className="text-blue-600 col-span-full" onClick={loadMoreVideos}>더보기</button>
    </Video>
  );
}

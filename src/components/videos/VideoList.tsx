import { useRef } from 'react';

import Video from '.';

import { Item } from '../../types/videos';

type VideoListProps = {
  videos: Item[];
  onLoadMoreVideos: () => void;
}

export default function VideoList({ videos, onLoadMoreVideos }: VideoListProps) {
  const container = useRef<HTMLUListElement>(null);

  return (
    <Video ref={container} className="grid gap-2 grid-cols-videosAutofill">
      {videos.map((video) => (
        <Video.item key={`${video.id.videoId}-${video.etag}`}>
          {video.snippet.title}
        </Video.item>
      ))}
      <button type="button" className="text-blue-600" onClick={() => onLoadMoreVideos()}>더보기</button>
    </Video>
  );
}

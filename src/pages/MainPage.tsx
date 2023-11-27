import { Suspense } from 'react';
import { useFetchVideos } from '../hooks/videos';

import Wrapper from '../components/common/wrapper';
import VideoList from '../components/videos/VideoList';

export default function MainPage() {
  const { videos, loadMoreVideos } = useFetchVideos();

  return (
    <Suspense fallback={<p>데이터 불러오는 중...</p>}>
      <Wrapper className="p-2">
        <VideoList videos={videos} onLoadMoreVideos={loadMoreVideos} />
      </Wrapper>
    </Suspense>
  );
}

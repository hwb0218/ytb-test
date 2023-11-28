import { Suspense } from 'react';
import Wrapper from '../components/common/wrapper';
import VideoList from '../components/videos/VideoList';

export default function MainPage() {
  return (
    <Wrapper className="p-2">
      <Suspense fallback={<p>로딩 중...</p>}>
        <VideoList />
      </Suspense>
    </Wrapper>
  );
}

import Wrapper from '../components/common/wrapper';
import VideoList from '../components/videos/VideoList';

export default function MainPage() {
  return (
    <Wrapper className="p-2 max-h-[100vh] pt-[68px]">
      <VideoList />
    </Wrapper>
  );
}

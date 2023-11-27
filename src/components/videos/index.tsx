import { forwardRef } from 'react';

import { PropsWithClasses } from '../types';

const VideoMain = forwardRef<HTMLUListElement, PropsWithClasses>(
  ({ className, children }, ref) => <ul ref={ref} className={className}>{children}</ul>,
);

// React 컴포넌트 이름을 정의할 때 사용하는데, 주로 디버깅 용도로 사용된다. 리엑트 데브툴에서 컴포넌트 이름을 표시해준다.
// HOC, forwardRef와 같이 컴포넌트 이름을 자동으로 추론할 수 없을 경우에 displayName을 설정한다.
VideoMain.displayName = 'VideoMain';

function VideoItem({ children, className }: PropsWithClasses) {
  return <li className={className}>{children}</li>;
}

const Video = Object.assign(VideoMain, {
  item: VideoItem,
});

export default Video;

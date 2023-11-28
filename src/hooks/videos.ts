import { useEffect, useState } from 'react';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import { youtubeService } from '../services/youtube/YoutubeService';
import { Item } from '../types/videos';

export function useInfiniteQueryFetchVideos() {
  const { data: videos, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['videos'],
    queryFn: ({ pageParam = '' }) => youtubeService.fetchVideosMostPopular(pageParam),
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
  });

  const loadMoreVideos = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return {
    videos: videos?.pages ?? [],
    loadMoreVideos,
  };
}

export function useFetchVideos() {
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined);
  const [videos, setVideos] = useState<Item[]>([]);

  const { data, isSuccess } = useQuery({
    queryKey: ['videos', nextPageToken],
    queryFn: () => youtubeService.fetchVideosMostPopular(nextPageToken),
  });

  useEffect(() => {
    if (isSuccess) {
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
    }
  }, [isSuccess, data?.items]);

  const loadMoreVideos = () => {
    if (data && data.nextPageToken) {
      setNextPageToken(data?.nextPageToken);
    }
  };

  return {
    videos: videos ?? [],
    loadMoreVideos,
  };
}

export function useFetchVideosByKeyword({ searchQuery }: {
  searchQuery: string
}) {
  const { data: videos } = useQuery({
    queryKey: ['videos', searchQuery],
    queryFn: () => youtubeService.fetchVideosByKeyword(searchQuery),
  });

  return { videos: videos?.items ?? [] };
}

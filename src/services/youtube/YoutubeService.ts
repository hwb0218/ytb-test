import axios from 'axios';
import { Videos } from '../../types/videos';

export default class ApiService {
  private instance = axios.create({
    baseURL: process.env.YOUTUBE_BASE_URL,
  });

  async fetchVideosMostPopular(nextPageToken : string = ''): Promise<Videos> {
    const params = {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      maxResults: '24',
      regionCode: 'KR',
      key: process.env.YOUTUBE_API_KEY,
      ...(nextPageToken && { pageToken: nextPageToken }),
    };

    const { data } = await this.instance.get('/videos', { params });

    return data;
  }

  async fetchVideosByKeyword(searchQuery: string): Promise<Videos> {
    const { data } = await this.instance.get('/listByKeyword.json', {
      params: {
        part: 'snippet',
        maxResults: '24',
        regionCode: 'KR',
        q: searchQuery,
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    return data;
  }
}

export const youtubeService = new ApiService();

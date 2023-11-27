export enum IDKind {
  YoutubeVideo = 'youtube#video',
}

export interface ID {
  kind: IDKind;
  videoId: string;
}

export enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export enum LiveBroadcastContent {
  None = 'none',
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export interface Videos {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

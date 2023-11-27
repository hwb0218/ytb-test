declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    YOUTUBE_BASE_URL: string;
    YOUTUBE_API_KEY: string;
  }
}

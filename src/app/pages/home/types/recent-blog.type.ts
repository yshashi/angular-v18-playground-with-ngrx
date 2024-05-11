import { TrendingBlog } from './trending-blog.type';

export type RecentBlog = TrendingBlog & {
  description: string;
};

import { Blog } from './blog.type';
import { RecentBlog } from './recent-blog.type';
import { TrendingBlog } from './trending-blog.type';

export type BlogResponse = {
  isLoading: boolean;
  errorMessage: string | null;
  messsage: string | null;
  data: Blog[] | TrendingBlog[] | RecentBlog;
};

import { RecentBlog } from './recent-blog.type';

export type Blog = RecentBlog & {
  tags: string[];
  author: string;
  authorImageUrl: string;
};

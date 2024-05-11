import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Blog } from '../types/blog.type';
import { TrendingBlog } from '../types/trending-blog.type';
import { RecentBlog } from '../types/recent-blog.type';

export const blogActions = createActionGroup({
  source: 'blogs',
  events: {
    loadBlogs: emptyProps(),
    loadBlogsSuccess: props<{ response: Blog[] }>(),
    loadBlogsFailure: props<{ errorMessage: string }>(),

    loadTrendingBlogs: emptyProps(),
    loadTrendingBlogsSuccess: props<{ response: TrendingBlog[] }>(),
    loadTrendingBlogsFailure: props<{ errorMessage: string }>(),

    loadRecentBlogs: emptyProps(),
    loadRecentBlogsSuccess: props<{ response: RecentBlog }>(),
    loadRecentBlogsFailure: props<{ errorMessage: string }>(),
  },
});

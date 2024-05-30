import { TrendingBlog } from './../../types/trending-blog.type';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const trendingBlogActions = createActionGroup({
  source: 'trendingBlogs',
  events: {
    loadTrendingBlogs: emptyProps(),
    loadTrendingBlogsSuccess: props<{ response: TrendingBlog[] }>(),
    loadTrendingBlogsFailure: props<{ errorMessage: string }>(),
  },
});

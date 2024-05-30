import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RecentBlog } from '../../types/recent-blog.type';

export const recentBlogActions = createActionGroup({
  source: 'recentBlogs',
  events: {
    loadRecentBlogs: emptyProps(),
    loadRecentBlogsSuccess: props<{ response: RecentBlog }>(),
    loadRecentBlogsFailure: props<{ errorMessage: string }>(),
  },
});

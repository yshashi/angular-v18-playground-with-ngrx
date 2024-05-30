import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Blog } from '../../types/blog.type';

export const blogActions = createActionGroup({
  source: 'blogs',
  events: {
    loadBlogs: emptyProps(),
    loadBlogsSuccess: props<{ response: Blog[] }>(),
    loadBlogsFailure: props<{ errorMessage: string }>(),
  },
});

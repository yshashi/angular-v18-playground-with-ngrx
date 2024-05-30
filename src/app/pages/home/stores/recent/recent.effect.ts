import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { recentBlogActions } from './recent.action';
import { BlogService } from '../../services/blog.service';

export const recentBlogEffect = createEffect(
  (action$ = inject(Actions), blogService = inject(BlogService)) => {
    return action$.pipe(
      ofType(recentBlogActions.loadRecentBlogs),
      switchMap(() =>
        blogService.getRecentBlog().pipe(
          map((res) => {
            return recentBlogActions.loadRecentBlogsSuccess({ response: res });
          }),
          catchError((err) => {
            console.log(err);
            return of(
              recentBlogActions.loadRecentBlogsFailure({
                errorMessage: err.error,
              })
            );
          })
        )
      )
    );
  },
  {
    functional: true,
  }
);

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogService } from '../../services/blog.service';
import { trendingBlogActions } from './trending.action';
import { catchError, map, of, switchMap } from 'rxjs';

export const trendingBlogEffect = createEffect(
  (actions$ = inject(Actions), blogService = inject(BlogService)) => {
    return actions$.pipe(
      ofType(trendingBlogActions.loadTrendingBlogs),
      switchMap(() => {
        return blogService.getTrendingBlogs().pipe(
          map((response) => {
            return trendingBlogActions.loadTrendingBlogsSuccess({ response });
          }),
          catchError((err) => {
            return of(
              trendingBlogActions.loadTrendingBlogsFailure({
                errorMessage: 'Failed to load trending blogs',
              })
            );
          })
        );
      })
    );
  },
  {
    functional: true,
  }
);

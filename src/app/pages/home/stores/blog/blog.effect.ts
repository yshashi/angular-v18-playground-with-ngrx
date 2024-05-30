import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BlogService } from '../../services/blog.service';
import { blogActions } from './blog.action';
import { catchError, map, of, switchMap } from 'rxjs';

export const blogEffects = createEffect(
  (action$ = inject(Actions), blogService = inject(BlogService)) => {
    return action$.pipe(
      ofType(blogActions.loadBlogs),
      switchMap(() =>
        blogService.getBlogs().pipe(
          map((res) => {
            return blogActions.loadBlogsSuccess({ response: res });
          }),
          catchError((err) => {
            console.log(err);
            return of(
              blogActions.loadBlogsFailure({ errorMessage: err.error })
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

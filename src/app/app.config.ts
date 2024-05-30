import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  RedirectCommand,
  Router,
  provideRouter,
  withNavigationErrorHandler,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import {
  blogFeatureKey,
  blogReducer,
} from './pages/home/stores/blog/blog.reducer';
import * as blogEffects from './pages/home/stores/blog/blog.effect';
import {
  trendingBlogFeatureKey,
  trendingBlogReducer,
} from './pages/home/stores/trending/trending.reducer';
import {
  recentBlogFeatureKey,
  recentBlogReducer,
} from './pages/home/stores/recent/recent.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withNavigationErrorHandler((error) => {
        const route = inject(Router);
        return new RedirectCommand(route.parseUrl('/error'), {replaceUrl: true});
      })
    ),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideEffects([blogEffects]),
    provideState(blogFeatureKey, blogReducer),
    provideState(trendingBlogFeatureKey, trendingBlogReducer),
    provideState(recentBlogFeatureKey, recentBlogReducer),
  ],
};

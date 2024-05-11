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
import { blogFeatureKey, blogReducer } from './pages/home/stores/blog.reducer';
import * as blogEffects from './pages/home/stores/blog.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes
      // withNavigationErrorHandler((err) => {
      //   return new RedirectCommand(inject(Router).parseUrl('/error'));
      // })
    ),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideEffects([blogEffects]),
    provideState(blogFeatureKey, blogReducer),
  ],
};

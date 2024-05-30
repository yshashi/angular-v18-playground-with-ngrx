import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: (routeInfo) => {
      console.log(routeInfo);
      return 'pages';
    },
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./pages/auth/auth.route').then((a) => a.AUTH_ROUTE),
  },
  {
    path: 'pages',
    component: MainLayoutComponent,
    loadChildren: () => import('./pages/page.route').then((a) => a.PAGE_ROUTE),
    canActivate: [authGuard],
  },
  {
    path: 'error',
    loadComponent: () => import('./core/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];



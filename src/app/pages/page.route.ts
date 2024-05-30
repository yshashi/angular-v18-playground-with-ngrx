import { Routes } from '@angular/router';

export const PAGE_ROUTE: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((c) => c.ContactComponent),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./home/blog-detail/blog-detail.component').then(
        (c) => c.BlogDetailComponent
      ),
  },
  {
    path: 'widget',
    loadComponent: () =>
      import('./widget/widget.component').then((c) => c.WidgetComponent),
  },
];

import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { RecentBlogComponent } from './recent-blog/recent-blog.component';
import { TrendingBlogsComponent } from './trending-blogs/trending-blogs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { blogActions } from './stores/blog/blog.action';
import { selectBlogState, selectData } from './stores/blog/blog.reducer';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogResponse } from './types/blog-response.type';
import { Blog } from './types/blog.type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecentBlogComponent,
    TrendingBlogsComponent,
    BlogsComponent,
    ButtonComponent,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  showAllBlogs = signal(false);
  store = inject(Store);
  blogs = this.store.select(selectData);
  #router = inject(Router);

  ngOnInit(): void {
    this.store.dispatch(blogActions.loadBlogs());
  }

  toggleBlogVisibility() {
    this.showAllBlogs.update((val) => !val);
  }

  routeToDetail(id: number) {
    this.#router.navigate(['pages/blog', id]);
  }
}

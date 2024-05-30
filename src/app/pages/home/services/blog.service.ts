import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from '../types/blog.type';
import { TrendingBlog } from '../types/trending-blog.type';
import { RecentBlog } from '../types/recent-blog.type';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  readonly #http = inject(HttpClient);

  getBlogs() {
    return this.#http.get<Blog[]>('assets/data/blogs.json');
  }

  getTrendingBlogs() {
    return this.#http.get<TrendingBlog[]>('app/shared/data/trending.json');
  }

  getRecentBlog() {
    return this.#http.get<RecentBlog>('app/shared/data/recent.json');
  }
}

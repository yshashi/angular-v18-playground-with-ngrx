import { Component, OnInit, inject, signal } from '@angular/core';
import { RecentBlogComponent } from './recent-blog/recent-blog.component';
import { TrendingBlogsComponent } from './trending-blogs/trending-blogs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { blogActions } from './stores/blog.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecentBlogComponent,
    TrendingBlogsComponent,
    BlogsComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(blogActions.loadBlogs());
  }
  showAllBlogs = signal(false);
  store = inject(Store);

  toggleBlogVisiblity() {
    this.showAllBlogs.update((val) => !val);
  }
}

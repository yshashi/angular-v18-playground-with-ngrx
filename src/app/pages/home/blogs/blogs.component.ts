import { Component, input, output } from '@angular/core';
import { Blog } from '../types/blog.type';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blog = input.required<Blog>();
  blogClick = output<number>();

  handleBlogClick(id: number) {
    this.blogClick.emit(id);
  }
}

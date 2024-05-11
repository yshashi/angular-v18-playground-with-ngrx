import { Component } from '@angular/core';
import { CommentsComponent } from '../../../core/comments/comments.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

}

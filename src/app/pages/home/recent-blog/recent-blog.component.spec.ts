import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogComponent } from './recent-blog.component';

describe('RecentBlogComponent', () => {
  let component: RecentBlogComponent;
  let fixture: ComponentFixture<RecentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { createFeature, createReducer, on } from '@ngrx/store';
import { BlogResponse } from '../../types/blog-response.type';
import { Blog } from '../../types/blog.type';
import { blogActions } from './blog.action';

const initialBlogState: BlogResponse<Blog[]> = {
  isLoading: false,
  errorMessage: null,
  message: null,
  data: [],
};

const blogFeature = createFeature({
  name: 'blog',
  reducer: createReducer(
    initialBlogState,
    on(blogActions.loadBlogs, (state) => ({ ...state, isLoading: true })),
    on(blogActions.loadBlogsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      message: 'Blogs Fetched Successfully',
      data: action.response,
    })),
    on(blogActions.loadBlogsFailure, (state) => ({
      ...state,
      isLoading: false,
      errorMessage: 'Failed to fetch the blogs!',
    }))
  ),
});

export const {
  name: blogFeatureKey,
  reducer: blogReducer,
  selectData,
  selectErrorMessage,
  selectIsLoading,
  selectBlogState,
  selectMessage,
} = blogFeature;

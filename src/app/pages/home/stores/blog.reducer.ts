import { createFeature, createReducer, on } from '@ngrx/store';
import { BlogResponse } from '../types/blog-response.type';
import { Blog } from '../types/blog.type';
import { blogActions } from './blog.action';

const initialBlogState: BlogResponse = {
  isLoading: false,
  errorMessage: null,
  messsage: null,
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
      messsage: 'Blogs Fetched Successfully',
      data: action.response,
    })),
    on(blogActions.loadBlogsFailure, (state) => ({
      ...state,
      isLoading: false,
      errorMessage: 'Failed to fetch the blogs!',
    })),

    on(blogActions.loadTrendingBlogs, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(blogActions.loadTrendingBlogsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      messsage: 'Trending Blog Fetched Successfully',
      data: action.response,
    })),
    on(blogActions.loadBlogsFailure, (state) => ({
      ...state,
      isLoading: false,
      errorMessage: 'Failed to fetch the trending blogs!',
    })),

    on(blogActions.loadRecentBlogs, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(blogActions.loadRecentBlogsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      messsage: 'Recent Blog Fetched Successfully',
      data: action.response,
    })),
    on(blogActions.loadRecentBlogsFailure, (state) => ({
      ...state,
      isLoading: false,
      errorMessage: 'Failed to fetch the recent blogs!',
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
  selectMesssage,
} = blogFeature;

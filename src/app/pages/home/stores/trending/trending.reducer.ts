import { createFeature, createReducer, on } from '@ngrx/store';
import { BlogResponse } from '../../types/blog-response.type';
import { TrendingBlog } from '../../types/trending-blog.type';
import { trendingBlogActions } from './trending.action';

const initialTrendingState: BlogResponse<TrendingBlog[]> = {
  data: [],
  errorMessage: null,
  isLoading: false,
  message: null,
};

const trendingBlogFeature = createFeature({
  name: 'trendingBlogs',
  reducer: createReducer(
    initialTrendingState,
    on(trendingBlogActions.loadTrendingBlogs, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(trendingBlogActions.loadTrendingBlogsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      message: 'Trending Blogs Fetched Successfully',
      data: action.response,
    })),
    on(trendingBlogActions.loadTrendingBlogsFailure, (state) => ({
      ...state,
      isLoading: false,
      errorMessage: 'Failed to fetch the trending blogs!',
    }))
  ),
});

export const {
  name: trendingBlogFeatureKey,
  reducer: trendingBlogReducer,
  selectData: selectTrendingBlogData,
  selectErrorMessage: selectTrendingBlogErrorMessage,
  selectIsLoading: selectTrendingBlogIsLoading,
  selectTrendingBlogsState: selectTrendingBlogState,
  selectMessage: selectTrendingBlogMessage,
} = trendingBlogFeature;

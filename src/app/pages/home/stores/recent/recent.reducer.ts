import { createFeature, createReducer, on } from '@ngrx/store';
import { BlogResponse } from '../../types/blog-response.type';
import { TrendingBlog } from '../../types/trending-blog.type';
import { trendingBlogActions } from '../trending/trending.action';

const initialTrendingBlogState: BlogResponse<TrendingBlog[]> = {
  isLoading: false,
  errorMessage: null,
  message: null,
  data: [],
};

const recentBlogFeature = createFeature({
  name: 'recentBlog',
  reducer: createReducer(
    initialTrendingBlogState,
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
  name: recentBlogFeatureKey,
  reducer: recentBlogReducer,
  selectData: selectRecentBlogData,
  selectErrorMessage: selectRecentBlogErrorMessage,
  selectIsLoading: selectRecentBlogIsLoading,
  selectRecentBlogState: selectRecentBlogState,
  selectMessage: selectRecentBlogMessage,
} = recentBlogFeature;

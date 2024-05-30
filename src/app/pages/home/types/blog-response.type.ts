export type BlogResponse<T> = {
  isLoading: boolean;
  errorMessage: string | null;
  message: string | null;
  data: T | null;
};

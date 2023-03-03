import { ArticlesState } from "./articlesSlice";

export const articlesSelector = (state: any) => state.articles.articles;

export const articlesLoadingSelector = (state: ArticlesState) =>
  state.isLoading ?? false;

export const articlesLoadingError = (state: ArticlesState) => state.error;

export const totalResultsSelector = (state: any) => state.articles.totalResults;

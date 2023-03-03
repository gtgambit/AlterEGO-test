import { ArticlesState } from "./articlesSlice";

export const articlesSelector = (state: any) => state.articles.articles;

export const articlesLoadingSelector = (state: any) => state.articles.isLoading;

export const articlesLoadingError = (state: ArticlesState) => state.error;

export const totalResultsSelector = (state: any) => state.articles.totalResults;

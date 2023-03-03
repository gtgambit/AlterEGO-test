import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getArticles, getMoreArticles } from "./thunkNews";
import { Article } from "../../types/types";

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  totalResults: number;
  isLoadingMore: boolean;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
  totalResults: 0,
  isLoadingMore: false,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    deleteArticle(state, { payload }) {
      state.articles = state.articles.filter(
        (article) => article.link !== payload
      );
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.totalResults = action.payload.total_hits;
        state.articles = action.payload?.articles;
      })
      .addCase(getArticles.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(getMoreArticles.pending, (state) => {
        state.isLoadingMore = true;
        state.error = null;
      })
      .addCase(
        getMoreArticles.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoadingMore = false;
          state.articles = [...state.articles, ...action.payload?.articles];
          state.totalResults = action.payload.total_hits;
        }
      )
      .addCase(
        getMoreArticles.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoadingMore = false;
          state.error = action.payload.error;
        }
      ),
});

export const { deleteArticle } = articlesSlice.actions;

export default articlesSlice.reducer;

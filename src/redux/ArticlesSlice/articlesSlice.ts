import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getArticles } from "./thunk";

interface Article {
  url: string;
  title: string;
  description: string;
  urlToImage: string;
}

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    deleteArticle(state, { payload }) {
      state.articles = state.articles.filter(
        (article) => article.url !== payload
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
        state.articles = [...state.articles, ...action.payload.articles];
      })
      .addCase(getArticles.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }),
});

export const { deleteArticle } = articlesSlice.actions;

export default articlesSlice.reducer;

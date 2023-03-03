import { fetchArticles } from "../../services/newsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async (page: any, { rejectWithValue }) => {
    try {
      return await fetchArticles(page);
    } catch (error) {
      return rejectWithValue({ message: "Some error" });
    }
  }
);

export const getMoreArticles = createAsyncThunk(
  "articles/getMoreArticles",
  async (page: any, { rejectWithValue }) => {
    try {
      return await fetchArticles(page);
    } catch (error) {
      return rejectWithValue({ message: "Some error" });
    }
  }
);

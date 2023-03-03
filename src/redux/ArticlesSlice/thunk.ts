import { fetchArticles } from "../../services/newsApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async (page: any, thunkAPI) => {
    try {
      const response = await fetchArticles(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

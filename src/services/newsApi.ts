import axios from "axios";
import { Article } from "../types/types";

interface FetchArticlesResponse {
  items: Article[];
  page: number;
  total_hits: number;
  page_size: number;
}

export const fetchArticles = async (
  page: number
): Promise<FetchArticlesResponse> => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/search?q=Apple&countries=CA&page=${page}&page_size=10`,
    {
      headers: {
        "x-api-key": "cqX7HfDCtzYnFfGMCK3ZmlrZFWMfxFk0gYa52ftbKJM",
      },
    }
  );
  return data as FetchArticlesResponse;
};

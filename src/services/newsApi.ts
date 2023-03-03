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
        "x-api-key": "2BYtwO2X3GisJoLyg90TFOlDtvDLuWT7QcXedFKBPzo",
      },
    }
  );
  return data as FetchArticlesResponse;
};

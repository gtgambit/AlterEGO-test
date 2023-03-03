import axios from "axios";

export const fetchArticles = async (page: number) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/everything?q=apple&from=2023-02-28&to=2023-02-28&page=${page}&pagesize=10&sortBy=popularity&apiKey=b6225402ed9746ef8e861d9757e1c93b`
  );
  return data;
};

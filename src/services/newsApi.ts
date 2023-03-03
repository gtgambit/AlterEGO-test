import axios from "axios";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const fetchArticles = async (page: number) => {
  const { data } = await axios.get(
    `${PROXY_URL}https://newsapi.org/v2/everything?q=apple&from=2023-02-28&to=2023-02-28&page=${page}&pagesize=10&sortBy=popularity&apiKey=b6225402ed9746ef8e861d9757e1c93b`,
    { headers: { "X-Requested-With": "XMLHttpRequest" } }
  );
  return data;
};

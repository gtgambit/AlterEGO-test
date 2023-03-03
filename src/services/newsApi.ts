import axios from "axios";

export const fetchArticles = async (page: number) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/everything?q=apple&from=2023-02-28&to=2023-02-28&page=${page}&pagesize=10&sortBy=popularity&apiKey=6ec2dbb8a5c04abcbbbf93b5c7529daa`
  );
  return data;
};

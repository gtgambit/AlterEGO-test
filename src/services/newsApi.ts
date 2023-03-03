//import axios from "axios";

//export const fetchArticles = async (page: number) => {
//  const { data } = await axios.get(
//    `https://newsapi.org/v2/everything?q=apple&from=2023-02-28&to=2023-02-28&page=${page}&pagesize=10&sortBy=popularity&apiKey=b6225402ed9746ef8e861d9757e1c93b`
//  );
//  return data;
//};

//import axios from "axios";

//export const fetchArticles = async (max: number) => {
//  const { data } = await axios.get(
//    `https://gnews.io/api/v4/search?q=apple&lang=en&country=us&max=${max}&apikey=436d4758852ab0809c31ee8a76d0c10e`
//  );
//  return data;
//};

import axios from "axios";

export const fetchArticles = async (page: number) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/search?q=Apple&countries=CA&page=${page}&page_size=10`,
    {
      headers: {
        "x-api-key": "dIKHBuWGLjvVkGDLRbEuojDUSVLX7Z-vBNzyBJm_WY4",
      },
    }
  );
  return data;
};

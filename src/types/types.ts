export interface Article {
  author: string;
  headline: { main: string };
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  //source: { id: null; name: string };
}

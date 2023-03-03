import { useState, useEffect } from "react";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { Grid, Button, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  getArticles,
  getMoreArticles,
} from "../../redux/ArticlesSlice/thunkNews";
import {
  articlesSelector,
  totalResultsSelector,
} from "../../redux/ArticlesSlice/articlesSelectors";
import { useAppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

interface NewsPageProps {}

export const NewsPage: React.FC<NewsPageProps> = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(articlesSelector);
  const total = useSelector(totalResultsSelector);

  const [page, setPage] = useState<any>(1);

  const { t } = useTranslation();

  const loadArticles = () => {
    dispatch(getArticles(page));
  };

  const hasMoreArticles = page < total / 10;

  const loadMoreArticles = () => {
    setPage((prev: any) => prev + 1);
    dispatch(getMoreArticles(page + 1));
  };

  useEffect(() => {
    loadArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Typography textAlign="center" variant="h4" mt={2} gutterBottom>
        {t("news.title")}
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article: any) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </Grid>
      {hasMoreArticles && (
        <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={loadMoreArticles}>
            {t("buttons.loadMore")}
          </Button>
        </Box>
      )}
    </section>
  );
};

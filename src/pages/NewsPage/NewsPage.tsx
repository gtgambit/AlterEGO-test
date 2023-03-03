import { useState, useEffect } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../redux/store";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { Loader } from "../../components/Loader/Loader";
import {
  getArticles,
  getMoreArticles,
} from "../../redux/ArticlesSlice/thunkNews";
import {
  articlesLoadingSelector,
  articlesSelector,
  totalResultsSelector,
} from "../../redux/ArticlesSlice/articlesSelectors";

interface NewsPageProps {}

export const NewsPage: React.FC<NewsPageProps> = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(articlesSelector);
  const total = useSelector(totalResultsSelector);
  const isLoadingArticles = useSelector(articlesLoadingSelector);

  const [page, setPage] = useState(1);

  const { t } = useTranslation();

  const hasMoreArticles = page < total / 10;

  useEffect(() => {
    dispatch(getArticles(page));
  }, []);

  const loadMoreArticles = () => {
    setPage((prev) => prev + 1);
    dispatch(getMoreArticles(page + 1));
  };

  return (
    <section>
      <Typography textAlign="center" variant="h4" mt={2} gutterBottom>
        {t("news.title")}
      </Typography>
      <Grid container spacing={2}>
        {isLoadingArticles ? (
          <Loader />
        ) : (
          articles.map((article: any) => (
            <ArticleCard key={article._id} article={article} />
          ))
        )}
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

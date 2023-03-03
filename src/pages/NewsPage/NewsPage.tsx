import { useState, useEffect } from "react";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { Grid, Button, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { getArticles } from "../../redux/ArticlesSlice/thunk";
import { articlesSelector } from "../../redux/ArticlesSlice/articlesSelectors";
import { useAppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";

interface NewsPageProps {}

export const NewsPage: React.FC<NewsPageProps> = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(articlesSelector);

  const [page, setPage] = useState<any>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { t } = useTranslation();

  const loadMoreArticles = () => {
    if (articles.length === 0) {
      dispatch(getArticles(1));
      setHasMore(true);
      return;
    }
    setPage((prev: any) => prev + 1);
    dispatch(getArticles(page + 1));
  };

  useEffect(() => {
    if (isMounted) {
      loadMoreArticles();
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  return (
    <section>
      <Typography textAlign="center" variant="h4" mt={2} gutterBottom>
        {t("news.title")}
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article: any, index: number) => (
          <ArticleCard key={index} article={article} />
        ))}
      </Grid>
      {hasMore && (
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

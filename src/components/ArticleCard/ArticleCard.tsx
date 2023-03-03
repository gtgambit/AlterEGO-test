import * as React from "react";
import { Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { deleteArticle } from "../../redux/ArticlesSlice/articlesSlice";
import { useAppDispatch } from "../../redux/store";

import { Article } from "../../types/types";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = React.memo(
  ({ article: { link, title, summary } }) => {
    const { t } = useTranslation();

    const slicedTitle =
      title?.length > 60 ? `${title?.slice(0, 60)}...` : title;
    const slicedDescription =
      summary?.length > 80 ? `${summary?.slice(0, 80)}...` : summary;

    let image = "https://picsum.photos/200/300";

    const dispatch = useAppDispatch();
    const handleArticleDelete = (event: any) => {
      const articleUrl = event.target
        .closest("div > div")
        .querySelector("a").href;
      dispatch(deleteArticle(articleUrl));
    };

    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ mt: 1 }}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              sx={{ height: 200 }}
              image={
                image
                  ? image
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              }
              title={title}
            />
            <CardContent sx={{ height: 100 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontSize: "1.1rem" }}>
                {slicedTitle}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "0.9rem" }}>
                {slicedDescription}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button size="small">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  {t("articleCard.learnMore")}
                </Link>
              </Button>
              <Button size="small" onClick={handleArticleDelete}>
                <DeleteIcon />
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    );
  }
);

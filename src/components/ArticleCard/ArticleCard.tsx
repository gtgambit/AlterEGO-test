import * as React from "react";
import {
  Grid,
  Link,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { deleteArticle } from "../../redux/ArticlesSlice/articlesSlice";
import { useAppDispatch } from "../../redux/store";

import { Article } from "../../types/types";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = React.memo(
  ({ article: { link, title, summary, _id, media } }) => {
    const { t } = useTranslation();

    const slicedTitle =
      title?.length > 60 ? `${title?.slice(0, 60)}...` : title;
    const slicedDescription =
      summary?.length > 80 ? `${summary?.slice(0, 80)}...` : summary;

    const noImage =
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

    const dispatch = useAppDispatch();
    const handleArticleDelete = () => {
      dispatch(deleteArticle(_id));
    };

    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ mt: 1 }}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              sx={{ height: 200 }}
              image={media ? media : noImage}
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

import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
      }}>
      <Typography variant="h4" align="center" gutterBottom>
        {t("home.title")}
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        {t("home.text")}
      </Typography>
    </Container>
  );
};

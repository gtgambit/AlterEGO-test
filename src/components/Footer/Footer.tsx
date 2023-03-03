import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#0288d1",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}></Grid>
      </Grid>
      <Typography color="white" variant="h6" align="center" gutterBottom>
        {t("footer.copyright")}
      </Typography>
    </Box>
  );
};

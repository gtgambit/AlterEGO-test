import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Loader } from "../components/Loader/Loader";

export const Layout = (): JSX.Element => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem("LANGUAGE") === "en" ? "en" : "ua";

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}>
        <Container maxWidth="lg">
          <Header />
        </Container>
      </AppBar>
      <Box sx={{ flexGrow: 1, background: "#EDEDED" }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

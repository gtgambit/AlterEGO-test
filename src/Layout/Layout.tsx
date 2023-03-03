import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Loader } from "../components/Loader/Loader";

export const Layout = (): JSX.Element => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("LANGUAGE") === "en") {
      i18n.changeLanguage("en");
      return;
    }
    i18n.changeLanguage("ua");
  }, [i18n]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" style={{ background: "#1976d2" }}>
        <Container maxWidth="lg">
          <Header />
        </Container>
      </AppBar>
      <Box sx={{ flexGrow: 1, background: "#EDEDED" }}>
        <Box>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

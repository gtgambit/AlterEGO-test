import { AppBar, Box, Container } from "@mui/material";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Loader } from "../components/Loader/Loader";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("LANGUAGE") === "en") {
      i18n.changeLanguage("en");
      return;
    }
    i18n.changeLanguage("ua");
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" style={{ background: "#1976d2" }}>
        <Container maxWidth="lg">
          <Header />
        </Container>
      </AppBar>
      <Box sx={{ flexGrow: 1, background: "#EDEDED" }}>
        <Suspense fallback={<Loader />}>
          <Box>{children}</Box>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

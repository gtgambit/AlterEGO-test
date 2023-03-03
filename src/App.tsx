import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "./components/Loader/Loader";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(async () => ({
  default: (await import("./pages/HomePage/HomePage")).HomePage,
}));
const NewsPage = lazy(async () => ({
  default: (await import("./pages/NewsPage/NewsPage")).NewsPage,
}));
const ProfilePage = lazy(async () => ({
  default: (await import("./pages/ProfilePage/ProfilePage"))
    .ProtectedProfilePage,
}));
const LoginPage = lazy(async () => ({
  default: (await import("./pages/LoginPage/LoginPage")).LoginPage,
}));
const Page404 = lazy(async () => ({
  default: (await import("./pages/Page404/Page404")).Page404,
}));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;

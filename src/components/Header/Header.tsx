import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import scss from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../../redux/Auth/authSelectors";
import { logOutUser } from "../../redux/Auth/authSlice";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";

import cn from "classnames";

export const Header = () => {
  const isAuth = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      dispatch(logOutUser());
      navigate("/");
    }
  };

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/line-tag/planet-8.png"
          alt="Logo"
          style={{ height: 50, width: 50, filter: "invert()" }}
        />
        <Typography variant="h5" mt={2} sx={{ marginLeft: 1 }} gutterBottom>
          CBS News
        </Typography>
      </Box>
      <LanguageSelect />
      {isAuth ? (
        <>
          <Box sx={{ display: "flex" }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(scss.NavLink, { [scss.active]: isActive })
              }>
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                cn(scss.NavLink, { [scss.active]: isActive })
              }>
              {t("nav.news")}
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                cn(scss.NavLink, { [scss.active]: isActive })
              }>
              {t("nav.profile")}
            </NavLink>
          </Box>
          <Button sx={{ color: "inherit" }} onClick={handleClick}>
            <AccountCircle sx={{ marginRight: 0.5 }} />
            {t("auth.logout")}
          </Button>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(scss.NavLink, { [scss.active]: isActive })
              }>
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                cn(scss.NavLink, { [scss.active]: isActive })
              }>
              {t("nav.news")}
            </NavLink>
          </Box>
          <Button color="inherit" component={Link} to="/login">
            <AccountCircle sx={{ marginRight: 0.5 }} />
            {t("auth.login")}
          </Button>
        </>
      )}
      <span className={`${scss.NavLink} ${scss.NavLinkActive}`} />
    </Toolbar>
  );
};

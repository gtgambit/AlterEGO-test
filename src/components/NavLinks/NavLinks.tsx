import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../../redux/Auth/authSelectors";
import { logOutUser } from "../../redux/Auth/authSlice";
import { useTranslation } from "react-i18next";
import React from "react";
import scss from "./NavLinks.module.scss";

import cn from "classnames";

export const NavLinks = React.memo(() => {
  const isAuth = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const authLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/news", label: t("nav.news") },
    { to: "/profile", label: t("nav.profile") },
  ];

  const noAuthlinks = [
    { to: "/", label: t("nav.home") },
    { to: "/news", label: t("nav.news") },
  ];

  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      dispatch(logOutUser());
      navigate("/");
    }
  };

  return (
    <>
      {isAuth
        ? authLinks.map(({ to, label }) => (
            <React.Fragment key={to}>
              <Box sx={{ display: "flex" }}>
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(scss.NavLink, { [scss.active]: isActive })
                  }>
                  {label}
                </NavLink>
              </Box>
            </React.Fragment>
          ))
        : noAuthlinks.map(({ to, label }) => (
            <React.Fragment key={to}>
              <Box sx={{ display: "flex" }}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(scss.NavLink, { [scss.active]: isActive })
                  }>
                  {label}
                </NavLink>
              </Box>
            </React.Fragment>
          ))}
      {isAuth ? (
        <Button sx={{ color: "inherit" }} onClick={handleClick}>
          <AccountCircle sx={{ marginRight: 0.5 }} />
          {t("auth.logout")}
        </Button>
      ) : (
        <Button color="inherit" component={Link} to="/login">
          <AccountCircle sx={{ marginRight: 0.5 }} />
          {t("auth.login")}
        </Button>
      )}
    </>
  );
});

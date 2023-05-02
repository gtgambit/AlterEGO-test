import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { getUserAvatar } from "../../services/profileApi";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    email: "",
    first_name: "",
    avatar: "",
  });

  const { t } = useTranslation();

  const getUser = async () => {
    try {
      const data = await getUserAvatar();
      setProfile(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 2,
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          marginBottom: 16,
        }}>
        <Avatar
          alt="Profile Avatar"
          src={
            profile.avatar ||
            "https://cdn.icon-icons.com/icons2/3310/PNG/512/student_man_avatar_user_toga_school_university_icon_209264.png"
          }
          sx={{
            width: 128,
            height: 128,
            margin: " auto",
          }}
        />
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: { xs: "center", md: "start" },
            }}>
            {profile.first_name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginRight: { xs: "0", md: "16" },
              textAlign: { xs: "center", md: "" },
            }}>
            {t("profile.text")}
          </Typography>
          <List sx={{ display: { xs: "block", md: "flex" }, marginTop: 0 }}>
            <ListItem
              sx={{ marginRight: { xs: "0", md: "16" }, textAlign: "center" }}>
              <ListItemText primary={t("profile.posts")} secondary="20" />
            </ListItem>
            <ListItem
              sx={{
                marginRight: { xs: "0", md: "16" },
                textAlign: "center",
              }}>
              <ListItemText primary={t("profile.followers")} secondary="100" />
            </ListItem>
            <ListItem
              sx={{ marginRight: { xs: "0", md: "16" }, textAlign: "center" }}>
              <ListItemText primary={t("profile.followings")} secondary="50" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export const ProtectedProfilePage = withAuthRedirect(
  React.memo(ProfilePage),
  "/"
);

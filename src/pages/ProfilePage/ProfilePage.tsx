import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { getUserAvatar } from "../../services/profileApi";
import { useTranslation } from "react-i18next";

//import css from "./ProfilePage.module.css";
const styles = {
  root: {
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 128,
    height: 128,
    marginRight: 24,
  },
  name: {
    fontWeight: "bold",
  },
  stats: {
    display: "flex",
    marginTop: 16,
    "& li": {
      marginRight: 32,
    },
  },
};

type userProps = {
  email: string;
  first_name: string;
  avatar: string;
};

const ProfilePage = () => {
  const [profile, setProfile] = useState<userProps | null>(null);

  const { t } = useTranslation();

  const getUser = async () => {
    try {
      const data = await getUserAvatar();
      return setProfile(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box style={styles.root}>
        <Avatar
          alt="Profile Avatar"
          src={profile?.avatar}
          style={styles.avatar}
        />
        <Box>
          <Typography variant="h4" style={styles.name}>
            {profile?.first_name}
          </Typography>
          <Typography variant="body1">{t("profile.text")}</Typography>
          <List style={styles.stats}>
            <ListItem>
              <ListItemText primary={t("profile.posts")} secondary="20" />
            </ListItem>
            <ListItem>
              <ListItemText primary={t("profile.followers")} secondary="100" />
            </ListItem>
            <ListItem>
              <ListItemText primary={t("profile.followings")} secondary="50" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export const ProtectedProfilePage = withAuthRedirect(ProfilePage, "/");

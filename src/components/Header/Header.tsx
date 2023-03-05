import { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLinks } from "../NavLinks/NavLinks";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ p: 2 }}>
        CBS News
      </Typography>
      <Divider />
      <List>
        <NavLinks />
      </List>
    </Box>
  );

  return (
    <>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex", margin: "auto" } }}>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/line-tag/planet-8.png"
            alt="Logo"
            style={{
              height: 50,
              width: 50,
              filter: "invert()",
              marginRight: 5,
            }}
          />
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "flex", margin: "auto" } }}
            gutterBottom>
            CBS News
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}>
          <NavLinks />
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
            marginInline: "auto",
          }}>
          <LanguageSelect />
        </Box>
      </Toolbar>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              boxSizing: "border-box",
              background: "#FFF",
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

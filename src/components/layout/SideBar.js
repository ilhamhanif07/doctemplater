import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { mainListItems, secondaryListItems } from "./listItems";
import { Avatar } from "@mui/material";
import logo from "./assets/logo-mostrans.png";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#fff",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(4),
      },
    }),
  },
}));

function SideBar() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(true);
  };

  const closeToggleDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          {open ? null : (
            <Avatar
              src={logo}
              sx={{ width: 50, height: 50, marginLeft: "-35px" }}
            />
          )}
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontWeight: 500, flexGrow: 1, ml: 2 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Avatar src={logo} sx={{ width: 50, height: 50 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={toggleDrawer}
        onMouseLeave={closeToggleDrawer}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Avatar
            src={logo}
            sx={{ width: 50, height: 50, marginRight: "15px" }}
          />
          <Typography variant="h6" color="#07784A" sx={{ flexGrow: 1 }}>
            Mostrans Legal System
          </Typography>
        </Toolbar>
        <List component="nav">
          {mainListItems}
          {secondaryListItems}
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;

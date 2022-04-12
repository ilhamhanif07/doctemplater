import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Icon } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="material-icons-outlined">dashboard</Icon>
      </ListItemIcon>
      <Link to="/">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>
    <ListSubheader component="div" inset>
      Manajemen Data
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Icon>list_alt</Icon>
      </ListItemIcon>
      <Link to="/jobs">
        <ListItemText primary="Master Data 1" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="material-icons-outlined">task</Icon>
      </ListItemIcon>
      <ListItemText primary="Master Data 2" />
    </ListItemButton>
  </React.Fragment>
);

// export const mainListItems = [
//   {
//     title: "Dashboard",
//     path: "/",
//     icon: <Icon className="material-icons-outlined">dashboard</Icon>,
//     cName: "nav-text",
//   },
// ];

// export const secondaryListItems = [
//   {
//     title: "Dashboard",
//     path: "/",
//     icon: <Icon className="material-icons-outlined">dashboard</Icon>,
//     cName: "nav-text",
//   },
//   {
//     title: "Dashboard",
//     path: "/",
//     icon: <Icon className="material-icons-outlined">dashboard</Icon>,
//     cName: "nav-text",
//   },
// ];

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Report
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Icon className="material-icons-outlined">summarize</Icon>
      </ListItemIcon>
      <ListItemText primary="Laporan 1" />
    </ListItemButton>
  </React.Fragment>
);

import { ListItemButton, ListItemIcon, ListItemText, Icon, Box, Toolbar, List, Divider } from '@mui/material';
import { useState } from "react";
import MainBox from "../layout/MainBox";
import SectionBox from "../layout/SectionBox";
import AppBar from "../Navigation/AppBar";
import Drawer from "../Navigation/Drawer";
// import Home from "../pages/Home/Home";

import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    const [open, setOpen] = useState(false);
    const drawerWidth = 240;

    const toggleDrawer = () => {
        setOpen(true);
    }

    const closeToggleDrawer = () => {
        setOpen(false);
    }

    return (
        <MainBox>
            <AppBar drawerWidth={drawerWidth} open={open}/>
            
            <Drawer drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer} closeToggleDrawer={closeToggleDrawer}>
                <List>
                    <Link to="/" >
                        <ListItemButton>
                            {/* ini icon dashboard*/}
                            <ListItemIcon>
                                <Icon className="material-icons-outlined">dashboard</Icon>
                            </ListItemIcon>
                            {/* ini tulisan dashboard */}
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    
                    <Link to="/masterData">
                        <ListItemButton>
                            {/* ini icon dashboard*/}
                            <ListItemIcon>
                                <Icon className="material-icons-outlined">file</Icon>
                            </ListItemIcon>
                            {/* ini tulisan dashboard */}
                            <ListItemText primary="Master Data" />
                        </ListItemButton>
                    </Link>
                    
                </List>
            </Drawer>
            
            <SectionBox>
                <Outlet />
            </SectionBox>
        </MainBox>
    )
}
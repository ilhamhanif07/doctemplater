import { useState } from "react";
import MainBox from "../layout/MainBox";
import SectionBox from "../layout/SectionBox";
import AppBar from "../Navigation/AppBar";
import Drawer from "../Navigation/Drawer";

import { Outlet, useLocation } from 'react-router-dom';
import VerticalMenu from '../Navigation/VerticalMenu';

export default function Layout() {
    const [open, setOpen] = useState(false);
    const drawerWidth = 300;

    const toggleDrawer = () => {
        setOpen(true);
    }

    const closeToggleDrawer = () => {
        setOpen(false);
    }

    return (
        <MainBox>
            <AppBar drawerWidth={drawerWidth} open={open} />
            
            <Drawer drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer} closeToggleDrawer={closeToggleDrawer}>
                <VerticalMenu open={open}/>
            </Drawer>
            
            <SectionBox>
                <Outlet />
            </SectionBox>
        </MainBox>
    )
}

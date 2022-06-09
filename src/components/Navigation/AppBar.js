import { IconButton, styled, Typography, AppBar as MuiAppBar, Toolbar, Avatar } from "@mui/material";
import logoMostrans from '../../assets/logo-mostrans.png';
import { useLocation } from 'react-router-dom';
import menu from '../../menu/index';
import { useEffect, useState } from "react";

export default function AppBar({drawerWidth, open, children}) {
    let location = useLocation();
    const [title, setTitle] = useState('');
    const menus = menu;

    const AppBarConst = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })

    (({ theme, open }) => ({
        backgroundColor: "#FFFFFF",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(
            ["width", "margin"],
            {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }
        ),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(
                ["width", "margin"], 
                {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }
            )
        })
    }))

    useEffect(() => {
        menus.forEach((item) => {
            if(item.link === ''){
                item.children.forEach((item2) => {
                    if(item2.link === location.pathname){
                        setTitle(item2.title);
                    }
                })
            }else{
                if(item.link === location.pathname){
                    setTitle(item.title);
                }
            }
        })
    }, [location?.pathname])

    console.log(location, "now loc");
    return (
        <AppBarConst position="absolute" open={open}>
            <Toolbar sx={{pr: "24px"}}>
                {open ? null : (
                    <Avatar src={logoMostrans} sx={{ width: 50, height: 50, marginLeft: '-35px'}}/>
                )}

                <Typography variant="h4" color="primary" sx={{ fontWeight: 500, flexGrow: 1, ml: 2 }}>
                    {title}
                </Typography>

                <IconButton color="inherit">
                    <Avatar src={logoMostrans} sx={{ width: 50, height: 50}} />
                </IconButton>
            </Toolbar>
        </AppBarConst>
    )
}
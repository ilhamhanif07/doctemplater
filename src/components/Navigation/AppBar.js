import { IconButton, styled, Typography, AppBar as MuiAppBar, Toolbar, Avatar } from "@mui/material";
import logoMostrans from '../../assets/logo-mostrans.png';

export default function AppBar({drawerWidth, open}) {
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

    return (
        <AppBarConst position="absolute" open={open}>
            <Toolbar sx={{pr: "24px"}}>
                {open ? null : (
                    <Avatar src={logoMostrans} sx={{ width: 50, height: 50, marginLeft: '-35px'}}/>
                )}

                <Typography variant="h4" color="primary" sx={{ fontWeight: 500, flexGrow: 1, ml: 2 }}>
                    Dashboard
                </Typography>

                <IconButton color="inherit">
                    <Avatar src={logoMostrans} sx={{ width: 50, height: 50}} />
                </IconButton>
            </Toolbar>
        </AppBarConst>
    )
}
import { Avatar, styled, Toolbar, Typography, Drawer as MuiDrawer, Divider } from "@mui/material";
import logoMostrans from '../../assets/logo-mostrans.png';

export default function Drawer({drawerWidth, open, toggleDrawer, closeToggleDrawer, children}) {
    const DrawerConst = styled(MuiDrawer, {
        shouldForwardProp: (prop) => prop !== "open",
    })

    (({ theme, open }) => ({
        "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create(
                "width",
                {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }
            ),
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create(
                    "width",
                    {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }
                ),
                width: theme.spacing(4),
                [theme.breakpoints.up("sm")]: {
                    width: theme.spacing(4)
                }
            })
        }
    }))

    return(
        <>
            <DrawerConst
                variant="permanent"
                open={open}
                onMouseEnter={toggleDrawer}
                onMouseLeave={closeToggleDrawer}>
                
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                        marginBottom: '5px'
                    }}>

                    <Avatar 
                        src={logoMostrans}
                        sx={{ width: 50, height: 50, marginRight: '15px'}}/>
                    
                    <Typography variant="h6" color="#07784A" sx={{ flexGrow: 1 }}>
                        Mostrans Legal System
                    </Typography>
                </Toolbar>

                {children}
            </DrawerConst>
        </>
        
    )
}
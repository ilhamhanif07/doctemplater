import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom'
import menu from '../../menu';

export default function VerticalMenu() {
    return (
        <List>
            {
                menu.map((item, index) => {
                    if(!(item.link === '')){
                        return (
                            <Link to={item.link}>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title}/>
                                </ListItemButton>
                            </Link>
                        )
                    }else{
                        return(
                            <>
                                <ListItemButton disabled={true}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                                <List>
                                    {
                                        item.children.map((item2) => {
                                            return (
                                                <Link to={item2.link}>
                                                    <ListItemButton sx={{pl: 4}}>
                                                        <ListItemIcon>{item2.icon}</ListItemIcon>
                                                        <ListItemText primary={item2.title}/>
                                                    </ListItemButton>
                                                </Link>
                                            )
                                        })
                                    }
                                </List>
                            </>
                        )
                    }
                })
            }
        </List>
    )
}
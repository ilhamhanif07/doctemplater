import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom'
import menu from '../../menu';

export default function VerticalMenu(props) {
    const [title, setTitle] = useState('');

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
                                {
                                    props.open && <ListSubheader>{item.title}</ListSubheader>
                                }
                                {
                                    item.children.map((item2) => {
                                        return (
                                            <Link to={item2.link}>
                                                <ListItemButton>
                                                    <ListItemIcon>{item2.icon}</ListItemIcon>
                                                    <ListItemText primary={item2.subTitle}/>
                                                </ListItemButton>
                                            </Link>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                })
            }
        </List>
    )
}
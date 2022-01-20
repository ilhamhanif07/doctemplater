import React from 'react';
import { Drawer } from '@material-ui/core';
import { atom, useRecoilState } from "recoil";

export const toggleSidebarAtom = atom({
    key: 'toggleSidebarAtom',
    default: false
});

function SideBar() {
    const [isOpen, setOpen] = useRecoilState(toggleSidebarAtom);
    return (
        <Drawer open={isOpen} onClose={() => setOpen(false)}>
            <h1>ini navbar</h1>
        </Drawer>
    );
}

export default SideBar;

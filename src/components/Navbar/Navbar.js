import React from 'react';
import { useRecoilState } from 'recoil';
import SideBar, { toggleSidebarAtom } from '../Sidebar/Sidebar';

function NavBar({ children }) {
    const [, setOpen] = useRecoilState(toggleSidebarAtom);
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <SideBar />
            <div className='d-flex'>
                <button onClick={() => setOpen(p => !p)} className='btn btn-success'>open sidebar</button>y
            </div>
            <div className='flex-grow-1'>
                {children}
            </div>
        </div>
    );
}

export default NavBar;

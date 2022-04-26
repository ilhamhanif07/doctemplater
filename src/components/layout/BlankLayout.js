import React from "react";
import { Outlet } from "react-router-dom";

export default function BlankLayout({ children }) {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}
import React from 'react';
import { Routes, Route, useRoutes, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from '../pages/NotFound';
import { adminRoutes } from '../router/routes/index';

export default function Router() {
    const adminR = [...adminRoutes];

    let selectedRoutes = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: adminR
        },
        {
            path: '/login',
            element: <NotFound />
        },
        {
            path: '/*',
            element: <NotFound />
        }
    ])

    return (
        <React.Fragment>
            {selectedRoutes}
        </React.Fragment>
    )
}
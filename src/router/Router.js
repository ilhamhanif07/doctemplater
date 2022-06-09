import React from "react";
import { Routes, Route, useRoutes, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/Login";
import { adminRoutes } from "../router/routes/index";

export default function Router() {
  const adminR = [...adminRoutes];

  let selectedRoutes = useRoutes([
    // {
    //     path: '/',
    //     element: <Login />
    // },
    {
      path: "/",
      element: <Layout />,
      children: adminR,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <React.Fragment>{selectedRoutes}</React.Fragment>;
}

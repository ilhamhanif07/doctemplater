import { Routes, Route, Outlet, Link as RouterLink } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from '../pages/Home/Home';
import MasterData from '../pages/Master Data/MasterData';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>}/>
                <Route path="masterData" element={<MasterData/>}/>
            </Route>
        </Routes>
    )
}
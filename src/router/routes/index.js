// import home from "../../menu/masterData";
import home from '../routes/home';
import masterData from '../routes/masterData';
import request from './request';

const adminRoutes = [
    ...home,
    ...masterData,
    ...request,
]

export { adminRoutes };
import dashboard from './dashboard'
import masterData from './masterData';
import request from './request'

const adminNavigation = [
    ...dashboard,
    ...masterData,
    ...request
]

export default adminNavigation;
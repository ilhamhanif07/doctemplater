import React from 'react';
import { Route } from 'react-router';

function ProtectedRoute({ children, path, isProtected, replaceComponent, routeProps = {} }) {
    return (
        <Route {...routeProps} path={path}>
            {isProtected ? replaceComponent : children}
        </Route>
    );
}

export default ProtectedRoute;

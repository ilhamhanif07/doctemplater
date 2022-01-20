import React from 'react';
import { Redirect, Route } from 'react-router';
import NavBar from './components/Navbar/Navbar';
import NotFound from './components/NotFound';
// import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import MyDocument from './pages/MyDocument/MyDocument';
import Dft from './pages/Dft/Dft';
import Drf from './pages/Drf/Drf';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Uat from './pages/Uat/Uat';
import DocumentIdea from './pages/DocumentIdea/DocumentIdea';

function MainRoute() {
    return (
        <React.Fragment>
            <Route path='/' exact>
                <Redirect to='/mostranshelp/home' />
            </Route>
            <HomeRoute />
            <ProtectedRoute exact path='/login'>
                <Login />
            </ProtectedRoute>
            {/* <ProtectedRoute path='*' exact>
                <NotFound />
            </ProtectedRoute> */}
        </React.Fragment>
    );
}

function HomeRoute() {
    return (
        <ProtectedRoute path='/mostranshelp'>
            <NavBar>
                <ProtectedRoute path='/mostranshelp/home' exact>
                    <Home />
                </ProtectedRoute>
                <ProtectedRoute exact path='/mostranshelp/listing/:tipe'  >
                    <MyDocument />
                </ProtectedRoute>
                <ProtectedRoute exact path='/mostranshelp/idea'  >
                    <DocumentIdea />
                </ProtectedRoute>
                <ProtectedRoute exact path='/mostranshelp/drf'>
                    <Drf />
                </ProtectedRoute>
                <ProtectedRoute exact path='/mostranshelp/dft'>
                    <Dft />
                </ProtectedRoute>
                <ProtectedRoute exact path='/mostranshelp/uat'>
                    <Uat />
                </ProtectedRoute>
            </NavBar>
        </ProtectedRoute>
    );
}

export default MainRoute;

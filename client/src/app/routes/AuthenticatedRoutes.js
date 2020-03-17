import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../components/pages/SignIn/SignIn';
import SignUp from '../../components/pages/SignUp/SignUp';
import Home from '../../components/pages/Home/Home';

const AuthenticatedRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/signin">
                <Redirect to="/home"></Redirect>
            </Route>
            <Route path="/signup">
                <Redirect to="/home"></Redirect>
            </Route>

            <Route path="/home">
                <Home></Home>
            </Route>
        </Switch>
    );
};

export default AuthenticatedRoutes;

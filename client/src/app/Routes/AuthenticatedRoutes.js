import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../components/pages/SignIn/SignIn';
import SignUp from '../../components/pages/SignUp/SignUp';

const AuthenticatedRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/signin"></Redirect>
            </Route>
            <Route path="/signin">
                <SignIn></SignIn>
            </Route>
            <Route path="/signup">
                <SignUp></SignUp>
            </Route>
        </Switch>
    );
};

export default AuthenticatedRoutes;

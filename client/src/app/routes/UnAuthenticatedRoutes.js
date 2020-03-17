import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../components/pages/SignIn/SignIn';
import SignUp from '../../components/pages/SignUp/SignUp';

const UnAuthenticatedRoutes = () => {
    return (
        <Switch>
            <Route path="/signin">
                <SignIn></SignIn>
            </Route>
            <Route path="/signup">
                <SignUp></SignUp>
            </Route>
            <Route>
                <Redirect to="/signin"></Redirect>
            </Route>
        </Switch>
    );
};

export default UnAuthenticatedRoutes;

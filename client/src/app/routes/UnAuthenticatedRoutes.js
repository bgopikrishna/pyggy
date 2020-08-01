import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../components/pages/SignIn/SignIn';
import SignUp from '../../components/pages/SignUp/SignUp';
import ResetPassword from '../../components/pages/ResetPassword/ResetPassword';
import ChangePassword from '../../components/pages/ChangePassword/ChangePassword';

const UnAuthenticatedRoutes = () => {
    return (
        <Switch>
            <Route path="/account/reset_password">
                <ResetPassword />
            </Route>
            <Route path="/signin">
                <SignIn></SignIn>
            </Route>
            <Route path="/signup">
                <SignUp></SignUp>
            </Route>
            <Route path="/" exact>
                <Redirect to="/signin"></Redirect>
            </Route>
            <Route path="/account/change_password/:id/:token">
                <ChangePassword />
            </Route>
        </Switch>
    );
};

export default UnAuthenticatedRoutes;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../components/pages/SignIn/SignIn';
import SignUp from '../../components/pages/SignUp/SignUp';
import Home from '../../components/pages/Home/Home';
import Layout from '../../components/layout/Layout';
import GoalsProvider from '../../context/GoalsContext';
import Account from '../../components/pages/Account/Account';

const AuthenticatedRoutes = () => {
    return (
        <GoalsProvider>
            <Layout>
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
                    <Route path="/account">
                        <Account></Account>
                    </Route>
                </Switch>
            </Layout>
        </GoalsProvider>
    );
};

export default AuthenticatedRoutes;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../../components/pages/SignIn/SignIn';
import SignUp from '../../components/pages/SignUp/SignUp';
import Home from '../../components/pages/Home/Home';
import Layout from '../../components/layout/Layout';
import GoalsProvider from '../../context/GoalsContext';
import Account from '../../components/pages/Account/Account';
import CreateGoal from '../../components/pages/CreateGoal/CreateGoal';
import UpdateGoal from '../../components/pages/UpdateGoal/UpdateGoal';

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

                    <Route path="/create">
                        <CreateGoal></CreateGoal>
                    </Route>
                    <Route path="/update/:id">
                        <UpdateGoal></UpdateGoal>
                    </Route>
                </Switch>
            </Layout>
        </GoalsProvider>
    );
};

export default AuthenticatedRoutes;

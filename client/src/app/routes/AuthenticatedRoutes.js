import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/pages/Home/Home';
import Layout from '../../components/layout/Layout';
import GoalsProvider from '../../context/GoalsContext';
import Account from '../../components/pages/Account/Account';
import CreateGoal from '../../components/pages/CreateGoal/CreateGoal';
import UpdateGoal from '../../components/pages/UpdateGoal/UpdateGoal';
import List from '../../components/pages/List/List';

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
                    <Route path="/list">
                        <List></List>
                    </Route>
                    <Route path="/account">
                        <Account></Account>
                    </Route>

                    <Route path="/create">
                        <CreateGoal></CreateGoal>
                    </Route>
                    <Route path="/edit/:id">
                        <UpdateGoal></UpdateGoal>
                    </Route>
                </Switch>
            </Layout>
        </GoalsProvider>
    );
};

export default AuthenticatedRoutes;

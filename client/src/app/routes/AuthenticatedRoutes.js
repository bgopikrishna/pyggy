import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/pages/Home/Home';
import Layout from '../../components/layout/Layout';
import GoalsProvider from '../../context/GoalsContext';
import Account from '../../components/pages/Account/Account';
import CreateGoal from '../../components/pages/CreateGoal/CreateGoal';
import UpdateGoal from '../../components/pages/UpdateGoal/UpdateGoal';
import List from '../../components/pages/List/List';
import Search from '../../components/pages/Search/Search';
import GoalDetails from '../../components/pages/GoalDetails/GoalDetails';
import ResetPassword from '../../components/pages/ResetPassword/ResetPassword';
import ChangePassword from '../../components/pages/ChangePassword/ChangePassword';

const AuthenticatedRoutes = () => {
    return (
        <GoalsProvider>
            <Layout>
                <Switch>
                    <Route path="/account/reset_password">
                        <ResetPassword />
                    </Route>
                    <Route path="/account/change_password/:id/:token">
                        <ChangePassword />
                    </Route>

                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>

                    <Route path="/signin">
                        <Redirect to="/home" />
                    </Route>

                    <Route path="/signup">
                        <Redirect to="/home" />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/search">
                        <Search />
                    </Route>

                    <Route path="/list">
                        <List />
                    </Route>

                    <Route exact path="/account">
                        <Account />
                    </Route>

                    <Route path="/create">
                        <CreateGoal />
                    </Route>

                    <Route path="/edit/:id">
                        <UpdateGoal />
                    </Route>
                    <Route path="/info/:id">
                        <GoalDetails />
                    </Route>
                </Switch>
            </Layout>
        </GoalsProvider>
    );
};

export default AuthenticatedRoutes;

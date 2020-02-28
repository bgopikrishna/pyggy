import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Account from './Account'
import SignIn from './SignIn'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/account">
                <Account />
            </Route>
            <Route path="/signin">
                <SignIn />
            </Route>
        </Switch>
    )
}

export default Routes

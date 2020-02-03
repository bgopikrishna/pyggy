import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Account from './Account'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/account">
                <Account></Account>
            </Route>
        </Switch>
    )
}

export default Routes

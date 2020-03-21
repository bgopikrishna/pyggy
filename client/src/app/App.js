import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from './routes/UnAuthenticatedRoutes';
import useAuth from '../hooks/useAuth';

function App() {
    const { user } = useAuth();

    console.log(user);

    return (
        <Router>
            {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
        </Router>
    );
}

export default App;

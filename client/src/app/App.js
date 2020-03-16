import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AuthenticatedRoutes from './Routes/AuthenticatedRoutes';

function App() {
    return (
        <Router>
            <Layout>
                <AuthenticatedRoutes></AuthenticatedRoutes>
            </Layout>
        </Router>
    );
}

export default App;

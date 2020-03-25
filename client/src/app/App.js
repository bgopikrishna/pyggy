import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from './routes/UnAuthenticatedRoutes';
import useAuth from '../hooks/useAuth';
import { ToastProvider } from '../components/common/Toast';

function App() {
    const { user } = useAuth();

    console.log(user);

    return (
        <ToastProvider>
            <Router>
                {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
            </Router>
        </ToastProvider>
    );
}

export default App;

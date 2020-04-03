import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ToastProvider, Toast } from '../components/common/Toast';
import DesktopVersion from './DesktopVersion';

const UnAuthenticatedRoutes = React.lazy(() =>
    import('./routes/UnAuthenticatedRoutes')
);
const AuthenticatedRoutes = React.lazy(() =>
    import('./routes/AuthenticatedRoutes')
);

function App() {
    const { user } = useAuth();

    return (
        <ToastProvider>
            <Router>
                <React.Suspense fallback={<p>Loading</p>}>
                    {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
                </React.Suspense>
            </Router>

            <Toast />
        </ToastProvider>
    );
}

export default App;

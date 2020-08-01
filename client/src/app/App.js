import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Toast, useToast } from '../components/common/Toast';
import FullScreenLoader from '../components/common/FullScreenLoader/FullScreenLoader';

const UnAuthenticatedRoutes = React.lazy(() =>
    import('./routes/UnAuthenticatedRoutes')
);
const AuthenticatedRoutes = React.lazy(() =>
    import('./routes/AuthenticatedRoutes')
);

function App() {
    const { user } = useAuth();
    const { addToast } = useToast();

    useEffect(() => {
        addToast({
            message:
                "I'm working on a new version of this app with new set of features and new stack. The upcoming version will not require signup and will work in offline, Cheers 😘",
            type: 'info'
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router>
                <React.Suspense
                    fallback={
                        <FullScreenLoader message="Hmm, Waking up the sleeping server 😴" />
                    }>
                    {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
                </React.Suspense>
            </Router>

            <Toast />
        </>
    );
}

export default App;

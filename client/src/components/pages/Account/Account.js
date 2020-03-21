import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Account = () => {
    const { logout } = useAuth();

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Account;

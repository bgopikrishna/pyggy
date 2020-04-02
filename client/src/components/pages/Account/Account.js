import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Account = () => {
    const { logout, user } = useAuth();

    return (
        <div className="is-flex align-items-center flex-column has-padding-50">
            <p>Howdy, {user.name}</p>
            <button
                className="button has-margin-25 is-primary is-outlined"
                onClick={logout}>
                Logout
            </button>

            <p className="has-text-info">
                Account specific features coming soon
            </p>
        </div>
    );
};

export default Account;

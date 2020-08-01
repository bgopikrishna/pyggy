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

            <p className="">
                I'm working on a new version of this app with serverless stack.
            </p>
            <p>The coming version of app will also work in offline mode.</p>

            <p className="has-margin-50">
                Code by{' '}
                <a
                    href="https://bgopikrishna.me"
                    target="_blank"
                    rel="noopener noreferrer">
                    Gopi Krishna
                </a>{' '}
                |{' '}
                <a
                    href="https://github.com/bgopikrishna/pyggy"
                    target="_blank"
                    rel="noopener noreferrer">
                    Source Code
                </a>
            </p>
        </div>
    );
};

export default Account;

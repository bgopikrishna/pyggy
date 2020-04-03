import React from 'react';
import { doSignIn, doSignUp, logout as doLogout } from '../utils/auth-helpers';
import { useAsync } from 'react-async';
import { bootStrapUserData } from '../utils/user-data';
import FullScreenLoader from '../components/common/FullScreenLoader/FullScreenLoader';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const { data: user, reload, isLoading, isRejected } = useAsync({
        promiseFn: bootStrapUserData
    });

    const login = (formData) => doSignIn(formData).then(reload);

    const signup = (formData) => doSignUp(formData).then(reload);

    const logout = () => doLogout().then(reload);

    if (isLoading) return <FullScreenLoader />;

    if (isRejected) return <p>Something went wrong, try refreshing the page</p>;

    return (
        <AuthContext.Provider
            value={{ user, login, signup, logout }}
            {...props}></AuthContext.Provider>
    );
};

import React from 'react';
import { doSignIn, doSignUp, logout as doLogout } from './auth-helpers';
import { useAsync } from 'react-async';
import { bootStrapUserData } from './user-data';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const { data: user, reload } = useAsync({ promiseFn: bootStrapUserData });

    const login = (formData) => doSignIn(formData).then(reload);

    const signup = (formData) => doSignUp(formData).then(reload);

    const logout = () => doLogout().then(reload);

    return <AuthContext.Provider value={{ user, login, signup, logout }} {...props}></AuthContext.Provider>;
};

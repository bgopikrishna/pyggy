import React, { useState, useContext } from 'react';
import { doSignIn, storeAuthKey } from './auth-helpers';
import { Redirect } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getItemFromLocalStorage } from './other';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState();

    const login = (email, password) =>
        doSignIn(email, password).then((res) => {
            console.log(res);
            storeAuthKey(res.headers['x-authtoken']);

            setUser(res.data);
        });

    const signup = (name, email, password) => {};

    const logout = () => {};

    return (
        <AuthContext.Provider
            value={{ user, login, signup, logout, setUser }}
            {...props}></AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }

    return context;
};

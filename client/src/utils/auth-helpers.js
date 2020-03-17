import axios from 'axios';

const tokenKey = 'x-key';

export const doSignIn = (email, password) => {
    return axios.post('/api/auth/signin', { email, password });
};

export const storeAuthKey = (token) => {
    window.localStorage.setItem(tokenKey, token);
};
export const getUser = () => {
    const token = getToken();
    if (!token) {
        return Promise.resolve(null);
    }
    // logout()
    return axios.get('/api/user/me', { headers: { 'x-authtoken': getToken() } });
};

export const logout = () => {
    window.localStorage.removeItem(tokenKey);
    return Promise.resolve();
};

export const getToken = () => {
    return window.localStorage.getItem(tokenKey);
};

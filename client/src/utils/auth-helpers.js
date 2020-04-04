import * as apiHelper from './api-helper';

const tokenKey = 'x-key';

export const doSignIn = ({ email, password }) => {
    return apiHelper
        .postData('/api/auth/signin', { email, password }, {}, false)
        .then(handleAuthResponse)
        .catch((err) => {
            throw new Error(err);
        });
};

export const doSignUp = ({ name, email, password }) => {
    return apiHelper
        .postData('/api/auth/signup', { name, email, password }, {}, false)
        .then(handleAuthResponse);
};

export const getUser = () => {
    const token = getToken();

    if (!token) {
        return Promise.resolve(null);
    }
    return apiHelper
        .getData('/api/user/me')
        .then((res) => res.data)
        .catch((error) => {
            if (process.env.NODE_ENV === 'production') {
                logout();
            }
            return Promise.reject(error);
        });
};

export const logout = () => {
    window.localStorage.clear();
    return Promise.resolve();
};

export const getToken = () => {
    return window.localStorage.getItem(tokenKey);
};

const handleAuthResponse = (res) => {
    console.log('Auth Response =>', res);

    const user = res.data;
    storeUserInfo(user);
    storeAuthKey(res.data.token);

    return user;
};

const storeAuthKey = (token) => {
    window.localStorage.setItem(tokenKey, token);
};

const storeUserInfo = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
};

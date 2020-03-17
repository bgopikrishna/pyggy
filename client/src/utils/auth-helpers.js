import axios from 'axios';

const tokenKey = 'x-key';

export const doSignIn = async ({ email, password }) => {
    return axios.post('/api/auth/signin', { email, password }).then(handleAuthResponse);
};

export const doSignUp = async ({ name, email, password }) => {
    return axios.post('/api/auth/signup', { name, email, password }).then(handleAuthResponse);
};

const storeAuthKey = (token) => {
    window.localStorage.setItem(tokenKey, token);
};

const storeUserInfo = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
    const token = getToken();
    if (!token) {
        return Promise.resolve(null);
    }
    return axios
        .get('/api/user/me', { headers: { 'x-authtoken': token } })
        .then((res) => res.data)
        .catch((error) => {
            logout();
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

function handleAuthResponse(res) {
    const user = res.data;
    storeUserInfo(user);
    storeAuthKey(res.headers['x-authtoken']);
    return user;
}

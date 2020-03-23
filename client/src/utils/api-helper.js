import axios from 'axios';
import { getToken } from './auth-helpers';

const getData = async (url, config = {}) => {
    return axios.get(url, {
        ...config,
        headers: { 'x-authtoken': getToken() }
    });
};

const postData = async (url, data, config = {}, authorized = true) => {
    if (authorized) {
        return axios.post(url, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axios.post(url, data, config);
};

const putData = async (url, data = {}, config = {}, authorized = true) => {
    if (authorized) {
        return axios.put(url, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axios.put(url, data, config);
};

const deleteData = async (url, data = {}, config = {}, authorized = true) => {
    if (authorized) {
        return axios.delete(url, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axios.delete(url, data, config);
};

export { getData, postData, putData, deleteData };

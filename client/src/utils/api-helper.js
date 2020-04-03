import axios from 'axios';
import { getToken } from './auth-helpers';
import { PROD_API_BASE_URL, DEV_API_BASE_URL } from '../constants';

let API_BASE_URL = PROD_API_BASE_URL;

if (process.env.NODE_ENV === 'development') {
    API_BASE_URL = DEV_API_BASE_URL;
}

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
});

console.log(API_BASE_URL, 'base url');

async function getData(endpoint, config = {}) {
    return axiosInstance.get(endpoint, {
        ...config,
        headers: { 'x-authtoken': getToken() }
    });
}

async function postData(endpoint, data, config = {}, authorized = true) {
    if (authorized) {
        return axiosInstance.post(endpoint, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axiosInstance.post(endpoint, data, config);
}

async function putData(endpoint, data = {}, config = {}, authorized = true) {
    if (authorized) {
        return axiosInstance.put(endpoint, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axiosInstance.put(endpoint, data, config);
}

async function deleteData(endpoint, data = {}, config = {}, authorized = true) {
    if (authorized) {
        return axiosInstance.delete(endpoint, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axiosInstance.delete(endpoint, data, config);
}

export { getData, postData, putData, deleteData };

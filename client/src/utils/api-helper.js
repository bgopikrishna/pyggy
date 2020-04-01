import axios from 'axios';
import { getToken } from './auth-helpers';
import { PROD_API_BASE_URL, DEV_API_BASE_URL } from '../constants';

let API_BASE_URL = DEV_API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = PROD_API_BASE_URL;
}

async function getData(endpoint, config = {}) {
    const API_URL = API_BASE_URL + endpoint;

    return axios.get(API_URL, {
        ...config,
        headers: { 'x-authtoken': getToken() }
    });
}

async function postData(endpoint, data, config = {}, authorized = true) {
    const API_URL = API_BASE_URL + endpoint;

    if (authorized) {
        return axios.post(API_URL, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axios.post(endpoint, data, config);
}

async function putData(endpoint, data = {}, config = {}, authorized = true) {
    const API_URL = API_BASE_URL + endpoint;

    if (authorized) {
        return axios.put(API_URL, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axios.put(endpoint, data, config);
}

async function deleteData(endpoint, data = {}, config = {}, authorized = true) {
    const API_URL = API_BASE_URL + endpoint;

    if (authorized) {
        return axios.delete(API_URL, data, {
            ...config,
            headers: { 'x-authtoken': getToken() }
        });
    }

    return axios.delete(endpoint, data, config);
}

export { getData, postData, putData, deleteData };

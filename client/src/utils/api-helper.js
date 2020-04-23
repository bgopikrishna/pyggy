import axios from 'axios';
import { getToken } from './auth-helpers';

const axiosInstance = axios.create({
    baseURL: ''
});

async function getData(endpoint, config = {}) {
    return axiosInstance.get(endpoint, {
        ...config,
        headers: { 'X-Authtoken': getToken() }
    });
}

async function postData(endpoint, data, config = {}, authorized = true) {
    if (authorized) {
        return axiosInstance.post(endpoint, data, {
            ...config,
            headers: { 'X-Authtoken': getToken() }
        });
    }

    return axiosInstance.post(endpoint, data, config);
}

async function putData(endpoint, data = {}, config = {}, authorized = true) {
    if (authorized) {
        return axiosInstance.put(endpoint, data, {
            ...config,
            headers: { 'X-Authtoken': getToken() }
        });
    }

    return axiosInstance.put(endpoint, data, config);
}

async function deleteData(endpoint, data = {}, config = {}, authorized = true) {
    console.log('deleteRequest', endpoint, data, config, authorized);

    if (authorized) {
        console.log('Authorized delete', getToken());
        return axiosInstance.delete(endpoint, {
            ...config,
            headers: { 'X-Authtoken': getToken() },
            data
        });
    }

    return axiosInstance.delete(endpoint, data, config);
}

export { getData, postData, putData, deleteData };

import _axios from 'axios';
import { IResponse } from 'typings';
import { updateTokenLocalStorage, getUserLocalStorage } from './auth';


const url = process.env.REACT_APP_API_LINK;
const axios = _axios.create({
    baseURL: url,
});

// Request interceptor for API calls
axios.interceptors.request.use(
    async (config) => {
        const user = getUserLocalStorage();
        if (user !== null) {
            console.log(user.token)
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${user.token}`,
            };
        }
        return config;

    },
    (error) => {
        Promise.reject(error);
    }
);

// Response interceptor for API calls
axios.interceptors.response.use(
    (response) => {
        const data = response?.data as IResponse;
        if (data.tokenReset) {
            const newToken = data.tokenReset;
            updateTokenLocalStorage(newToken);
        }
        return response.data;
    },

);
export default axios;

import axios from 'axios'
axios.defaults.baseURL = 'https://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appkey: 'zb13992764153_1567741148860'
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});



export default axios;
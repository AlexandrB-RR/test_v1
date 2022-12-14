import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://petstore.swagger.io'
});

instance.defaults.headers.common['Authorization'] = 'ZSTYF0GBSSF0l3Ou6DTPE';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;

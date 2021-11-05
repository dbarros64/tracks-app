import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'http://aaac-2600-1700-22f5-1100-a94a-a691-4395-310e.ngrok.io/'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        };
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)



export default instance;



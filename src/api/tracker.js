import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'http://aab9-2600-1700-22f5-1100-79e0-7c84-42bc-89ce.ngrok.io/'
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



import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "9f58defcd2f79d669fd0669a9d72417b";

export const apiKey = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
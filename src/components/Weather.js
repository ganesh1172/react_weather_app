import { useState } from 'react';
import { apiKey } from '../apiKey';
import '../App.css';
import WeatherDetail from './WeatherDetail';

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(true);

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return (
            <div className="weather_date">
                <h3 className="day_date">{day}</h3>
                <p className="full_date">{date}, {month} {year}</p>
            </div>
        )
    }

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await apiKey(query);
            setWeather(data);
            setQuery('');
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <div className="search_box">
                <input type="text" className="search_bar" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            </div>
            {!loading ? (weather.main && (
                <>
                    <div className="weather_city">
                        <h3 className="city">{weather.name} <span className="country">{weather.sys.country}</span></h3>

                    </div>
                    {dateBuilder(new Date())}
                    <WeatherDetail weather={weather} />
                </>
            )
            ) : (<h1 style={{ textAlign: 'center' }}>Loading.....</h1>)}

        </div>
    )
}

export default Weather

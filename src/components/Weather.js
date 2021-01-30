import { useState } from 'react';
import { apiKey } from '../apiKey';
import '../App.css';
import { ImSearch } from 'react-icons/im';

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await apiKey(query);
            console.log(data);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="container">
            <div className="search_box">
                <input type="text" className="search_bar" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
                <ImSearch className="search_icon" size={25} />
            </div>
            {weather.main && (
                <h3>{weather.sys.country}</h3>
            )}
        </div>
    )
}

export default Weather

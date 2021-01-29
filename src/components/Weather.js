import { useState } from 'react';
import { apiKey } from '../apiKey';

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
        <div className="main-container">
            <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <h3>{weather.sys.country}</h3>
            )}
        </div>
    )
}

export default Weather

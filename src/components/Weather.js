import { useState } from 'react';

const Weather = () => {
    const [query, setQuery] = useState("");

    const search = () = {
        
    }

    return (
        <div>
            <h1>Open Weather API</h1>
            <form>
                <input type="text" placeholder="Enter city name" value={query} onChange={(e) => e.target.value} />
                <button onClick={search}>Search</button>
            </form>
        </div>
    )
}

export default Weather

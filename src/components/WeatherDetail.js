const WeatherDetail = ({ weather }) => {

    return (
        <div className="weather_details">
            <div className="temp">
                <h3 className="temp_title">{Math.round(weather.main.temp)}°c</h3>
                <div className="max_min">
                    <span className="temp_max">{Math.round(weather.main.temp_max)}°▲</span>
                    <span className="temp_min">{Math.round(weather.main.temp_min)}°▼</span>
                </div>
            </div>
            <div className="weather_desc">
                <h3 className="weather_title">{weather.weather[0].main}</h3>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Description" className="temp_logo" />
            </div>
            <div className="climate_details">
                <div className="pres_detail">
                    <h4>Pressure</h4>
                    <p>{weather.main.pressure} hpa</p>
                </div>
                <div className="humi_detail">
                    <h4>Humidity</h4>
                    <p>{weather.main.humidity} %</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetail;

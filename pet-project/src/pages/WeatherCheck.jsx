import React from 'react';
import '../css/WeatherCheck.css';
import WeatherData from '../components/WeatherData'

function WeatherCheck() {

    const [url, setUrl] = React.useState('');
    const [press, setPress] = React.useState(false);
    const inputEl = React.useRef('');

    const checkButtonHandler = (event) => {
        event.preventDefault();

        setUrl(url => url =
            `http://api.weatherapi.com/v1/forecast.json?key=3e2b23202a804627a5c115738222701&q=${inputEl.current.value}&days=3&aqi=no&alerts=no`)
        setPress(true);
    };

    return (
        <div className='weather'>
            <form className='weatherForm'>
                <h2>Where you want to check the weather</h2>
                <input ref={inputEl} type="text" placeholder='...maybe in Paris?'></input>
                <input type="submit" onClick={checkButtonHandler} value="Check"></input>
            </form>
            {press && <WeatherData q={inputEl.current.value} apiURL={url} />}
            <span id="clue">Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></span>

        </div>
    );
}

export default WeatherCheck;


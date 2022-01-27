import React from 'react';
import '../css/WeatherCheck.css';
import WeatherData from '../components/WeatherData'

function WeatherCheck() {

    const inputEl = React.useRef(null);

    const checkButtonHandler = (event) => {
        event.preventDefault();
        console.log(inputEl.current.value)
    };

    return (
        <div className='weather'>
            <WeatherData />
            <form className='weatherForm'>
                <h2>Where you want to check the weather</h2>
                <input ref={inputEl} type="text" placeholder='...maybe in Paris?'></input>
                <input type="submit" onClick={checkButtonHandler} value="Check"></input>
            </form>
            <span id="clue">Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></span>

        </div>
    );
}

export default WeatherCheck;


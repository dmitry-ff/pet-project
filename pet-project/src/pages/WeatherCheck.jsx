import React from 'react';
import '../css/WeatherCheck.css';

function WeatherCheck() {
    return (
        <div className='weather'>
            <form className='weatherForm'>
                <h2>Where you want to check the weather</h2>
                <input type="text" placeholder='...maybe in Paris?'></input>
                <input type="submit" value="Check"></input>
            </form>
        </div>
    );
}

export default WeatherCheck;


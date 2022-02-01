import _ from 'lodash';
import React from 'react';
import '../css/WeatherData.css'
import { WEEK_DAYS } from '../CONST/Const'

function Weather({ loading, data }) {

    let name = data[_.indexOf(data, 'name') + 1];
    let temp = _.floor(data[_.indexOf(data, 'temp_c') + 1]);
    let pic = data[_.indexOf(data, 'icon') + 1];
    let text = data[_.indexOf(data, 'text') + 1]
    let feels = _.floor(data[_.indexOf(data, 'feelslike_c') + 1]);
    let wind = (data[_.indexOf(data, 'wind_kph') + 1] / 3.6).toFixed(1);

    return <>
        {!loading && <div className='weatherData'>
            <div className='townName'><b>Weather </b>in <b>{name}</b></div>
            <div className='weatherToday'>
                <div className='column-1'>
                    <span className='deg'>{temp > 0 ? '+' + temp : temp}°</span>
                    <img src={pic} alt={text} />
                </div>
                <div className='column-2'>
                    <span className='text'>{text}</span>
                    <span className='feelsLike'>Feels like <b>{feels > 0 ? '+' + feels : feels}°</b></span>
                </div>
                <span className='windSpeed'>Wind speed  <b>{wind} m/s</b></span>
            </div>

            {/* <div className='weatherWeek'>
        {!props.loading && <ul>{_.map(props.data, (item, index) => <li key={index + props.data.length}>{item}</li>)}</ul>}

    </div> */}
        </div>
        }
    </>
}

export default Weather;

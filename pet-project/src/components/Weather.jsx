import _ from 'lodash';
import React from 'react';
import '../css/WeatherData.css'
import { WEEK_DAYS } from '../CONST/Const'

function Weather({ loading, nameHead, data }) {

    // const [localData, setLocaldata] = React.useState({})
    // setLocaldata(data[0].day);
    // console.log()
    // let { avgtemp_c, condition: { icon, text }, daily_chance_of_rain, daily_chance_of_snow, maxtemp_c, maxwind_kph, mintemp_c } = localData;

    return <>
        {!loading && <div className='weatherData'>
            <div className='townName'>Weather in <b>{nameHead}</b></div>
            <div className='weatherToday'>
                <div className='column-1'>
                    <span className='deg'>{data[0].day.avgtemp_c > 0 ? '+' + _.floor(data[0].day.avgtemp_c) : _.floor(data[0].day.avgtemp_c)}°</span>
                    <img src={data[0].day.condition.icon} alt={data[0].day.condition.text} />
                </div>
                <div className='column-2'>
                    <span className='text'>{data[0].day.condition.text}</span>
                    <div className='minmax'>
                        <span>max <b>{data[0].day.maxtemp_c > 0 ? '+' + _.floor(data[0].day.maxtemp_c) : _.floor(data[0].day.maxtemp_c)}</b></span>
                        <span>min <b>{data[0].day.mintemp_c > 0 ? '+' + _.floor(data[0].day.mintemp_c) : _.floor(data[0].day.mintemp_c)}</b></span>
                    </div>
                </div>
                <div className='column-3'>
                    <span className='windSpeed'>Wind speed  <b>{(data[0].day.maxwind_kph / 3.6).toFixed(1)} m/s</b></span>
                </div>
                <div className='column-4'>
                    <span className='rain'>{data[0].day.daily_chance_of_rain} %</span>
                    <span className='snow'>{data[0].day.daily_chance_of_snow} %</span>
                </div>
            </div>

            <div className='weatherWeek'>
                {!loading && <>
                    {
                        _.map(data, (item, index) =>
                            <div className='card' key={index}>
                                <div className='day'>{'today'}</div>
                                <div className='weatherCard'>
                                    <div className='mx'>
                                        <span className='mx-m'>{item.day.maxtemp_c > 0 ? '+' + _.floor(item.day.maxtemp_c) : _.floor(item.day.maxtemp_c)}°</span>
                                        <span className='mx-mi'>{item.day.mintemp_c > 0 ? '+' + _.floor(item.day.mintemp_c) : _.floor(item.day.mintemp_c)}°</span>
                                    </div>
                                    <img src={item.day.condition.icon} alt={item.day.condition.text} />
                                </div>
                            </div>)
                    }
                </>
                }

            </div>
        </div>
        }
    </>
}

export default Weather;

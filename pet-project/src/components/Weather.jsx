import _ from 'lodash';
import React from 'react';
import '../css/WeatherData.css'
import { WEEK_S } from '../CONST/Const'

function Weather({ loading, nameHead, data }) {

    return <>
        {!loading && <div className='weatherData'>
            <div className='townName'>Weather in <b>{nameHead}</b></div>
            <div className='weatherToday'>
                <div className='column-1'>
                    <span className='deg'>{_.head(data).day.avgtemp_c > 0 ? '+' + _.floor(_.head(data).day.avgtemp_c) : _.floor(_.head(data).day.avgtemp_c)}°</span>
                    <img src={_.head(data).day.condition.icon} alt={_.head(data).day.condition.text} />
                </div>
                <div className='column-2'>
                    <span className='text'>{_.head(data).day.condition.text}</span>
                    <div className='minmax'>
                        <span>max <b>{_.head(data).day.maxtemp_c > 0 ? '+' + _.floor(_.head(data).day.maxtemp_c) : _.floor(_.head(data).day.maxtemp_c)}</b></span>
                        <span>min <b>{_.head(data).day.mintemp_c > 0 ? '+' + _.floor(_.head(data).day.mintemp_c) : _.floor(_.head(data).day.mintemp_c)}</b></span>
                    </div>
                </div>
                <div className='column-3'>
                    <span className='windSpeed'>Wind speed  <b>{(_.head(data).day.maxwind_kph / 3.6).toFixed(1)} m/s</b></span>
                </div>
                <div className='column-4'>
                    <span className='rain'>{_.head(data).day.daily_chance_of_rain} %</span>
                    <span className='snow'>{_.head(data).day.daily_chance_of_snow} %</span>
                </div>
            </div>

            <div className='weatherWeek'>
                {!loading && <>
                    {
                        _.map(data, (item, index) =>
                            <div className='card' key={index}>
                                <div className='day'>{index === 0 ?
                                    'Today'
                                    : `${WEEK_S[new Date(item.date).getDay()]}, ${new Date(item.date).getDate()}`}</div>
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

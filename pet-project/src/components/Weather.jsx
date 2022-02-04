import _ from 'lodash';
import React from 'react';
import '../css/WeatherData.css'
import { WEEK_S } from '../CONST/Const'
import { WeatherData } from '../Styled/weather'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';

const SpanName = styled.span`
    font-size:1.5em;
`
const WeatherToday = styled.div`
    display: flex;
    align-items:flex-end ;
    justify-content: space-between;
    div {
        margin-right:20px;
        display:flex;
    }
`
const FirstColumn = styled.div`
    display: flex;
    align-items: flex-end;
    & > span{
        font-size: 3em;
    }

`

const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        justify-content: space-between;
        width: 150px;
    }
`

const ThirdColumn = styled.div`

`

const FourthColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    &:first-child {
        position: relative;
        &:after{
            vertical-align: top;
            background-image: url(../img/7795646_weather_cloud_rain_icon.svg);
            position: absolute;
            content: "";
            right:-20px;
            display: inline-block;
            width: 15px;
            height: 15px;
            background-repeat: no-repeat;
            padding: 0;
        }
    }
    &:last-child {
        position: relative;
        &:after{
            vertical-align: bottom;
            background-image: url(../img/8664916_snowflake_icon.svg);
            position: absolute;
            content: "";
            right:-20px;
            display: inline-block;
            width: 15px;
            height: 15px;
            background-repeat: no-repeat;
            padding: 0;
        }
    }
`
function Weather({ loading, nameHead, data }) {

    return <>
        {!loading &&
            <WeatherData>
                <SpanName >
                    Weather in <b>{nameHead}</b>
                </SpanName>
                <WeatherToday>
                    <FirstColumn>
                        <span>{_.head(data).day.avgtemp_c > 0 ? '+' + _.floor(_.head(data).day.avgtemp_c) : _.floor(_.head(data).day.avgtemp_c)}°</span>
                        <img src={_.head(data).day.condition.icon} alt={_.head(data).day.condition.text} />
                    </FirstColumn>
                    <SecondColumn>
                        <span className='text'>{_.head(data).day.condition.text}</span>
                        <div>
                            <span>max <b>{_.head(data).day.maxtemp_c > 0 ? '+' + _.floor(_.head(data).day.maxtemp_c) : _.floor(_.head(data).day.maxtemp_c)}</b></span>
                            <span>min <b>{_.head(data).day.mintemp_c > 0 ? '+' + _.floor(_.head(data).day.mintemp_c) : _.floor(_.head(data).day.mintemp_c)}</b></span>
                        </div>
                    </SecondColumn>
                    <ThirdColumn>
                        <span className='windSpeed'>Wind speed  <b>{(_.head(data).day.maxwind_kph / 3.6).toFixed(1)} m/s</b></span>
                    </ThirdColumn>
                    <FourthColumn>
                        <span className='rain'>{_.head(data).day.daily_chance_of_rain} %</span>
                        <span className='snow'>{_.head(data).day.daily_chance_of_snow} %</span>
                    </FourthColumn>
                </WeatherToday>

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
            </WeatherData>
        }
    </>

}

export default Weather;
